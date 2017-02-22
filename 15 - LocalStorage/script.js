const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const uncheckAll = document.querySelector('.uncheckAll');
const checkAll = document.querySelector('.checkAll');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}
function toggleDone(e) {
  if(!e.target.matches('input')) return; // skip unless input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAllItems(e){
  e.preventDefault();
  items.forEach(item => {
    item.done = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAllItems(e){
  e.preventDefault();
  items.forEach(item => {
    item.done = true;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
uncheckAll.addEventListener('click', uncheckAllItems);
checkAll.addEventListener('click', checkAllItems);

populateList(items, itemsList);
