/**
 * Safely triggers haptic feedback using the browser's Vibration API.
 * Wraps execution in a try-catch and guards against SSR, missing support,
 * and iframe permission policies.
 */
let lastHapticTime = 0;

export function triggerHaptic(type: 'light' | 'medium' | 'success' | 'warning'): void {
  if (
    typeof window === 'undefined' ||
    !window.navigator ||
    typeof window.navigator.vibrate !== 'function'
  ) {
    return;
  }

  const now = Date.now();
  // Prevent vibration spam by enforcing a minimum delay between triggers
  if (now - lastHapticTime < 50) {
    return;
  }

  try {
    switch (type) {
      case 'light':
        // A super subtle tick (8-12ms)
        window.navigator.vibrate(10);
        lastHapticTime = now;
        break;
      case 'medium':
        // A confirmation tick (18-25ms)
        window.navigator.vibrate(20);
        lastHapticTime = now;
        break;
      case 'success':
        // A crisp double pulse (20ms, pause, 20ms)
        window.navigator.vibrate([20, 60, 20]);
        lastHapticTime = now + 100; // Account for the duration of the pattern
        break;
      case 'warning':
        // A single longer vibration (30ms)
        window.navigator.vibrate(30);
        lastHapticTime = now;
        break;
      default:
        break;
    }
  } catch (error) {
    // Fail silently - e.g. in environments where vibration is blocked by policy
  }
}
