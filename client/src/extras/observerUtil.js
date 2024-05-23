export const createObserver = (selector, className, threshold = 0.25) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= threshold) { // Partially or fully in view based on the threshold
        entry.target.classList.add(className);
        observer.unobserve(entry.target); // Stop observing once the element is in view
      }
    });
  }, { threshold });

  elements.forEach(element => {
    observer.observe(element);
  });
};
