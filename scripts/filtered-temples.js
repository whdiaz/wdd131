const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const container = document.getElementById('temple-cards-container')

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "2012, September, 9",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
  },
  {
    templeName: "Barranquilla Colombia Temple",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
    templeName: "Las Vegas Nevada Temple",
    location: "Las Vegas, U.S.A",
    dedicated: "1989, December, 16",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-lds-758757-wallpaper.jpg"
  },
];

function generateTempleCards(filteredTemples) {
  container.innerHTML = ''; // Limpiar el contenedor

  filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';

      card.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sqft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      container.appendChild(card);
  });
}


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
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

function filterOldTemples() {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNewTemples() {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLargeTemples() {
  return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.area < 10000);
}

function showAllTemples() {
  return temples;
}

mainnav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
      const filter = event.target.textContent.trim();

      let filteredTemples = [];

      if (filter === 'Old') {
          filteredTemples = filterOldTemples();
      } else if (filter === 'New') {
          filteredTemples = filterNewTemples();
      } else if (filter === 'Large') {
          filteredTemples = filterLargeTemples();
      } else if (filter === 'Small') {
          filteredTemples = filterSmallTemples();
      } else if (filter === 'Home') {
          filteredTemples = showAllTemples();
      } else {
          filteredTemples = showAllTemples();
      }

      generateTempleCards(filteredTemples);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  generateTempleCards(showAllTemples());

  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = `© ${currentYear} Willian Honorio Diaz Torres`;

  const lastModified = document.lastModified;
  document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;
});


