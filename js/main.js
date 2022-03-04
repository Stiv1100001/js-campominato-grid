const grid = document.getElementById('grid');
const table = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function populateGrid(n, difficulty) {
  for (let i = 0; i < n; i++) {
    table[i] = [];

    let min, max;

    switch (difficulty) {
      case '1':
        {
          min = 1;
          max = 100;
        }
        break;

      case '2':
        {
          min = 1;
          max = 81;
        }
        break;

      case '3':
        {
          min = 1;
          max = 49;
        }
        break;

      default: {
        min = 1;
        max = 100;
      }
    }

    const row = document.createElement('div');
    row.classList.add('my-row');
    for (let j = 0; j < n; j++) {
      const block = document.createElement('div');
      block.classList.add('block', 'text-white');
      block.innerHTML = getRandomInt(min, max);

      block.addEventListener('click', function () {
        this.classList.toggle('bg-cyan');
        this.classList.toggle('text-white');
      });

      row.appendChild(block);
      table[i][j] = block;
    }

    grid.appendChild(row);
  }
}

document.querySelectorAll('.start').forEach((button) => {
  const difficulty = button.value;

  button.addEventListener('click', () => {
    grid.innerHTML = '';
    populateGrid(10, difficulty);
  });
});
