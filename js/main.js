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
    row.classList.add('my-row', 'd-flex', 'justify-content-center');
    for (let j = 0; j < n; j++) {
      const block = document.createElement('div');
      block.classList.add(
        'block',
        'text-white',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'h-100',
        'border',
        'border-3',
        'border-white'
      );

      const innerSpan = document.createElement('span');
      innerSpan.innerHTML = getRandomInt(min, max);

      block.appendChild(innerSpan);

      block.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('bg-cyan');
        event.currentTarget.classList.toggle('text-white');
        // event.currentTarget.classList.toggle('border');
      });

      row.appendChild(block);
      table[i][j] = block;
    }

    grid.appendChild(row);
  }
}

document.getElementById('difficulty').addEventListener('change', (event) => {
  grid.innerHTML = '';
  populateGrid(10, event.currentTarget.value);
});
