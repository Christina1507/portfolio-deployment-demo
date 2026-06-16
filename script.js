const floaters = document.querySelectorAll(".floater");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  floaters.forEach((floater) => {
    const depth = floater.dataset.depth || 10;
    floater.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});
