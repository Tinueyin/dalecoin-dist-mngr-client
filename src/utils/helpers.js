export const timeout = seconds =>
  new Promise((res, rej) => {
    setTimeout(() => res(), 1000 * seconds);
  });
