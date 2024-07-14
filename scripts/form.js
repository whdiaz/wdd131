// Product Array
const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    avgRating: 4.5,
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    avgRating: 4.7,
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    avgRating: 3.5,
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    avgRating: 3.9,
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    avgRating: 5.0,
  },
];

// Populate Product Name options
document.addEventListener('DOMContentLoaded', function () {
  const productSelect = document.getElementById('engine');

  products.forEach((product) => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

// LocalStorage counter for reviews
document.addEventListener('DOMContentLoaded', function () {
  const reviewForm = document.querySelector('form');

  reviewForm.addEventListener('submit', function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
  });
});

// Footer date update
document.addEventListener('DOMContentLoaded', function () {
  const currentYear = document.getElementById('current-year');
  const lastModified = document.getElementById('last-modified');

  currentYear.textContent = `© ${new Date().getFullYear()}`;
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
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

