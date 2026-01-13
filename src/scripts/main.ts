const header = document.querySelector("section#hero h1") as HTMLHeadingElement;

window.onpointerover = moveGradient;
window.onpointermove = moveGradient;

function moveGradient(e: PointerEvent) {
  const rect = header.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  header.style.mask = `radial-gradient(circle 25em at ${x}px ${y}px, white, rgba(1, 1, 1, 0.15))`;
}
