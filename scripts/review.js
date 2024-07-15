document.addEventListener("DOMContentLoaded", function() {
  let reviewCount = localStorage.getItem('reviewCount');

  if (reviewCount === null || reviewCount === " ") {
      reviewCount = 0;  // Start from 0 if this is the first review
  } else {
      reviewCount = parseInt(reviewCount, 10);
  }

  reviewCount += 1;

  localStorage.setItem('reviewCount', reviewCount);

  const reviewCountElement = document.getElementById('reviewCount');
  if (reviewCountElement) {
      reviewCountElement.textContent = reviewCount;
  } else {
      console.error("Element with ID 'reviewCount' not found");
  }
});
