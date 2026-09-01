export function counter_increase(
  target: number,
  update: (value: number) => void,
  duration = 1500,
): () => void {
  if (typeof requestAnimationFrame === 'undefined') {
    update(target);
    return () => undefined;
  }

  const start = performance.now();
  let frame = 0;

  const increase = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    update(Math.floor(target * progress));

    if (progress < 1) {
      frame = requestAnimationFrame(increase);
    }
  };

  frame = requestAnimationFrame(increase);

  return () => cancelAnimationFrame(frame);
}
