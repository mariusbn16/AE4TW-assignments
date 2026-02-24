let lastFocusedElement = null;

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
  lastFocusedElement = document.activeElement || null;
  modal.setAttribute("aria-hidden","false");
  const firstFocusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
  if(firstFocusable) firstFocusable.focus();
});

closeModalButton.addEventListener("click", () => {
  modal.setAttribute("aria-hidden","true");
  if(lastFocusedElement) lastFocusedElement.focus();
});

// Trap focus inside modal
modal.addEventListener("keydown", (e) => {
  if(e.key === "Tab") {
    const focusable = Array.from(modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"));
    if(focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length -1];
    if(e.shiftKey) { // shift+tab
      if(document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else { // tab
      if(document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  } else if(e.key === "Escape") {
    closeModalButton.click();
  }
});