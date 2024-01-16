window.addEventListener('DOMContentLoaded', () => {

  const taskInput = document.querySelector('.list__input');
  const taskSubmitBtn = document.querySelector('.list__button');
  const toDoList = document.querySelector('.list__to-do');

  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const modeText = document.querySelector('.theme__text');

  const placeholderValues = [
    'Ready, set, achieve!',
    'Dream big, type bigger',
    'Your tasks, your triumphs. Begin now!',
    'Every word gets you closer to success',
    'Your goals start here. Type to begin',
    'Fuel your productivity with your words',
    'Elevate your day with meaningful tasks',
    'Type your way to a brighter future',
    'Your move, type it!',
    'Words into action',
    'Start typing, start winning',
    'Type and conquer',
    'Unlock greatness with your keyboard',
    'Type your way to success!'
  ];

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      modeText.innerHTML = 'Dark Mode';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      modeText.innerHTML = 'Light Mode';
    }
  }

  function addTask() {
    if (taskInput.value === '') {
      alert('Dear Sir/Madam, it seems the input is empty :(');
    } else {
      let li = document.createElement('li');
      li.innerHTML = taskInput.value;
      li.classList.add('list__item');
      toDoList.appendChild(li);

      let span = document.createElement('span');
      span.innerHTML = 'x';
      span.classList.add('list__span');
      li.appendChild(span);
    }
    changePlaceholder();
    taskInput.value = '';
    saveData();
  }

  function saveData() {
    localStorage.setItem('data', toDoList.innerHTML);
  }

  function showTasks() {
    toDoList.innerHTML = localStorage.getItem('data');
  }

  function changePlaceholder() {
    let randomPlaceholder = Math.floor(Math.random() * placeholderValues.length);
    let randomPhrase = placeholderValues[randomPlaceholder];
    taskInput.placeholder = randomPhrase;
  }

  showTasks();

  // event listeners
  toggleSwitch.addEventListener('change', switchTheme);
  taskSubmitBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  toDoList.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  }, false);
});