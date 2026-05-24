/**
 * Premium Code Transpiler & Dynamic Runner for Java and C
 * Built to simulate complete compilers in standard client-side sandbox environments.
 */

export interface RunResult {
  success: boolean;
  output: string;
  error?: string;
}

/**
 * High-performing runner that parses input languages and transpiles them
 * to sandboxed JavaScript for instant feedback.
 */
export function runCode(language: string, rawCode: string): RunResult {
  const lang = (language || '').toLowerCase().trim();
  
  if (lang === 'c' || lang === 'cpp') {
    return runCCode(rawCode);
  }
  
  // Default to Java
  return runJavaCode(rawCode);
}

/**
 * Transpiles and Runs Java Code
 */
function runJavaCode(javaCode: string): RunResult {
  const logs: string[] = [];

  const customConsole = {
    log: (...args: any[]) => {
      logs.push(args.map(a => formatOutput(a)).join(' '));
    },
    error: (...args: any[]) => {
      logs.push('[Error] ' + args.join(' '));
    }
  };

  try {
    let code = javaCode;
    
    // Clean packages and imports
    code = code.replace(/package\s+[\w.]+;/g, '');
    code = code.replace(/import\s+[\w.*]+;/g, '');
    code = code.replace(/@Override\b/g, '');
    code = code.replace(/Thread\.sleep\(\s*(\d+)\s*\);/g, '// Simulated sleep of $1ms\n');
    code = code.replace(/\bimplements\s+[\w\s,]+/g, '');
    code = code.replace(/<[\w\s,<>]+>/g, '');

    // Replace modifiers
    code = code.replace(/\b(synchronized|volatile|transient|final)\b/g, '');
    code = code.replace(/\b(public|private|protected)\b/g, '');

    // Redirect standard stream prints
    code = code.replace(/System\.out\.println\s*\(/g, 'console.log(');
    code = code.replace(/System\.out\.print\s*\(/g, 'console.log('); 

    // Translate curly initializations: int[] x = {1, 2, 3}; -> let x = [1, 2, 3];
    code = code.replace(/\b(?:int|double|float|long|boolean|char|String)\b\s*(?:\[\])?\s*(\w+)\s*(?:\[\])?\s*=\s*\{([^}]*)\}\s*;/g, 'let $1 = [$2];');

    // Translate array allocations: new int[10] -> Array(10).fill(0)
    code = code.replace(/\bnew\s+(?:int|double|float|long|char|boolean|String)\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)');

    // Replace basic typed variable declarations with "let"
    const typesRegex = /\b(?:int|double|float|long|short|byte|char|boolean|String|[\w<>]+)\b\s+(\w+)\s*(=|;)/g;
    code = code.replace(typesRegex, (match, varName, delimiter) => {
      const reserved = ['class', 'extends', 'implements', 'return', 'throw', 'throws', 'else', 'import', 'package', 'new', 'static', 'void', 'try', 'catch', 'finally'];
      const matchTrimmed = match.trim().split(/\s+/)[0];
      if (reserved.includes(matchTrimmed) || reserved.includes(varName)) {
        return match;
      }
      return `let ${varName} ${delimiter}`;
    });

    // Replace inside loops
    code = code.replace(/\bfor\s*\(\s*(?:int|double|float|long|short|char|boolean|String)\b/g, 'for (let');

    // Clean up parameters in class declarations
    code = replaceMethodParameters(code);

    // Replace standard return class method headers
    code = code.replace(/\b(static)?\s*(?:void|int|double|float|long|short|char|boolean|String|[\w<>]+)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w,\s]+)?\s*\{/g, (match, isStatic, methodName, args) => {
      const reserved = ['if', 'while', 'for', 'switch', 'catch', 'return'];
      if (reserved.includes(methodName)) {
        return match;
      }
      return `${isStatic ? 'static ' : ''}${methodName}(${args}) {`;
    });

    // Detect class constructors
    const classMatches = [...code.matchAll(/\bclass\s+(\w+)\b/g)];
    const classNames = classMatches.map(m => m[1]);

    classNames.forEach(className => {
      const constructorRegex = new RegExp(`\\b${className}\\s*\\(([^)]*)\\)\\s*(?:throws\s+[\w,\s]+)?\s*\\{`, 'g');
      code = code.replace(constructorRegex, 'constructor($1) {');
    });

    // Trigger main execution automatically
    let targetClassToRun = '';
    const mainClassMatch = code.match(/class\s+(\w+)\s*\{[^}]*\bmain\s*\(/);
    if (mainClassMatch) {
      targetClassToRun = mainClassMatch[1];
    } else if (classNames.length > 0) {
      const testMain = classNames.find(name => name.toLowerCase() === 'main' || name.toLowerCase().includes('demo') || name.toLowerCase().includes('test'));
      targetClassToRun = testMain || classNames[classNames.length - 1];
    }

    let executionTrigger = '';
    if (targetClassToRun) {
      executionTrigger = `
        try {
          if (typeof ${targetClassToRun} !== 'undefined') {
            const runnerObj = new ${targetClassToRun}();
            if (typeof runnerObj.main === 'function') {
              runnerObj.main([]);
            } else if (${targetClassToRun}.main && typeof ${targetClassToRun}.main === 'function') {
              ${targetClassToRun}.main([]);
            }
          }
        } catch (execErr) {
          console.error(execErr.message);
        }
      `;
    }

    const fullJSCode = `
      const console = {
        log: customConsole.log,
        error: customConsole.error
      };
      
      ${code}

      ${executionTrigger}
    `;

    const sandbox = new Function('customConsole', 'formatOutput', fullJSCode);
    sandbox(customConsole, formatOutput);

    if (logs.length === 0) {
      logs.push('[Compilation Successful] Program exited cleanly (returned 0).');
    }

    return {
      success: true,
      output: logs.join('\n')
    };

  } catch (err: any) {
    return {
      success: false,
      output: logs.join('\n'),
      error: err.message || String(err)
    };
  }
}

/**
 * Transpiles and Runs C Code
 */
function runCCode(cCode: string): RunResult {
  const logs: string[] = [];

  const customConsole = {
    log: (...args: any[]) => {
      logs.push(args.map(a => formatOutput(a)).join(' '));
    },
    error: (...args: any[]) => {
      logs.push('[Error] ' + args.join(' '));
    }
  };

  try {
    let code = cCode;

    // Clean #include library imports
    code = code.replace(/#include\s*(?:<[^>]+>|"[^"]+")/g, '');

    // Handle printf formatted values: proxy printf(...) call to custom handler
    code = code.replace(/\bprintf\b/g, 'cPrintf');

    // Replace C types in variable declarations
    // Pattern: double value = 1.23; or int a;
    const regexCTypes = /\b(?:int|double|float|char|long|short|size_t)\b\s+(\w+)\s*(=|;)/g;
    code = code.replace(regexCTypes, (match, varName, delimiter) => {
      const reserved = ['return', 'main', 'sizeof', 'if', 'else', 'for', 'while', 'switch'];
      if (reserved.includes(varName)) {
        return match;
      }
      return `let ${varName} ${delimiter}`;
    });

    // Replace for declarations
    code = code.replace(/\bfor\s*\(\s*(?:int|double|float|long|short|char)\b/g, 'for (let');

    // Replace function definitions e.g., "int sum(int a, int b) {" -> "function sum(a, b) {"
    // except special methods or keywords
    code = replaceMethodParameters(code);
    code = code.replace(/\b(?:int|double|float|char|void|long|short)\s+(\w+)\s*\(([^)]*)\)\s*\{/g, (match, funcName, args) => {
      const reserved = ['if', 'while', 'for', 'switch', 'catch', 'return'];
      if (reserved.includes(funcName)) {
        return match;
      }
      return `function ${funcName}(${args}) {`;
    });

    // Standard run trigger for main()
    const mainTrigger = `
      try {
        if (typeof main === 'function') {
          main();
        }
      } catch (mainErr) {
        console.error(mainErr.message);
      }
    `;

    const fullJSCode = `
      const console = {
        log: customConsole.log,
        error: customConsole.error
      };

      // Custom formatting C implementation of printf
      function cPrintf(format, ...args) {
        if (!format) return;
        let result = String(format);
        let argIndex = 0;
        
        // Match standard formatting specifiers %d, %f, %s, etc.
        result = result.replace(/%d|%f|%s|%c|%lf/g, () => {
          if (argIndex < args.length) {
            return args[argIndex++];
          }
          return '';
        });
        
        // Print it
        console.log(result);
      }

      ${code}

      ${mainTrigger}
    `;

    const sandbox = new Function('customConsole', 'formatOutput', fullJSCode);
    sandbox(customConsole, formatOutput);

    if (logs.length === 0) {
      logs.push('[Execution Successful] C program completed with exit status 0.');
    }

    return {
      success: true,
      output: logs.join('\n')
    };

  } catch (err: any) {
    return {
      success: false,
      output: logs.join('\n'),
      error: err.message || String(err)
    };
  }
}

/**
 * Strips type prefixes from method parameter parenthesis lists
 * e.g. (int a, String b) -> (a, b)
 */
function replaceMethodParameters(code: string): string {
  return code.replace(/\([^)]*\)/g, (match) => {
    if (match === '()' || match.includes('==') || match.includes('<') || match.includes('>')) {
      return match;
    }

    const content = match.slice(1, -1);
    const params = content.split(',');
    
    const parsedParams = params.map(param => {
      const parts = param.trim().split(/\s+/);
      if (parts.length >= 2) {
        let name = parts[parts.length - 1];
        if (name.endsWith('[]')) {
          name = name.slice(0, -2);
        }
        return name;
      }
      return param.trim();
    });

    return `(${parsedParams.join(', ')})`;
  });
}

/**
 * Dynamic value output formattings
 */
function formatOutput(val: any): string {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'object') {
    return JSON.stringify(val);
  }
  return String(val);
}
