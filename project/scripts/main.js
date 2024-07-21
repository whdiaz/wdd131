document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
      name,
      email,
      message,
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Your message has been submitted!');
    contactForm.reset();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Output the current year to the first paragraph in the footer
  const yearParagraph = document.getElementById('current-year');
  yearParagraph.textContent = `© ${currentYear} Willian Honorio Diaz Torres`;

  // Get the last modified date of the document
  const lastModified = document.lastModified;

  // Output the last modified date to the second paragraph in the footer
  const modifiedParagraph = document.getElementById('last-modified');
  modifiedParagraph.textContent = `Last Modified: ${lastModified}`;
});
