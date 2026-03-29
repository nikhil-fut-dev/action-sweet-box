// ================= FOOTER ACCORDION =================

const footerTitles = document.querySelectorAll(".footer-col h4");

footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const parent = title.parentElement;

    parent.classList.toggle("active");
  });
});
