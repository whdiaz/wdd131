document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('ul');

  button.addEventListener('click', function () {
    const chapter = input.value.trim();

    if (chapter === '') {
      alert('Please enter a book and chapter.');
      input.focus();
      return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = 'x';

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
    input.focus();
  });
});
