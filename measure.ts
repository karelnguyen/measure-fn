/**
 * Measure a function's execution time
 * @param {Function} fn The function to measure
 * @param {'ms' | 's'} [unit='ms'] The unit of time to return
 * @returns {number} The time it took to execute the function
 */

export function measure(fn: Function, unit: "ms" | "s" = "ms"): number {
  const start = new Date().getTime();
  fn();
  const end = new Date().getTime();
  const time = end - start;
  return unit === "ms" ? time : time / 1000;
}
