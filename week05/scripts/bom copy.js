document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('ul');

  // Declare an array named chaptersArray and assign it the results of getChapterList() or an empty array if null/undefined
  let chaptersArray = getChapterList() || [];

  // Populate the displayed list of chapters
  chaptersArray.forEach((chapter) => displayList(chapter));

  // Button click event listener
  button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter === '') {
      alert('Please enter a book and chapter.');
      input.focus();
      return;
    }

    displayList(chapter);
    chaptersArray.push(chapter);
    setChapterList();
    input.value = '';
    input.focus();
  });

  // Function to display a list item
  function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Add class for styling

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(item);
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
  }

  // Function to set the localStorage item
  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  // Function to get the localStorage item
  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  // Function to delete a chapter from the array and update localStorage
  function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
  }
});
