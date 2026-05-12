const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

const form = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      formStatus.textContent = "Uzupełnij proszę wszystkie pola formularza.";
      return;
    }

    formStatus.textContent =
      "Dziękuję! Formularz jest gotowy do podpięcia pod Twój mail lub CRM. Na potrzeby podglądu zapis został zasymulowany.";
    form.reset();
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});
