// Define static values for temperature and wind speed
const temperature = 15; // Temperatura em °C
const windSpeed = 10; // Velocidade do vento em km/h

// Função para calcular a sensação térmica
function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}

// Verifica se as condições para calcular a sensação térmica são atendidas
function displayWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    const windChill = calculateWindChill(temp, wind);
    document.getElementById('windChill').innerText =
      windChill.toFixed(2) + ' °C';
  } else {
    document.getElementById('windChill').innerText = 'N/A';
  }
}

// Exibir a sensação térmica ao carregar a página
window.onload = function () {
  displayWindChill(temperature, windSpeed);

  // Exibir os valores de temperatura, condições e vento para complementar a funcionalidade
  document.getElementById('temperature').innerText = temperature + ' °C';
  document.getElementById('conditions').innerText = 'Sunny'; // Condição estática para exemplo
  document.getElementById('wind').innerText = windSpeed + ' km/h';
};

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
