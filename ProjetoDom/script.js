const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sideias = document.querySelector('#m-ideias');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sideias.value = itens[index].ideias;
    id = index;
  } else {
    sideias.value = '';
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement('tr');
  
  tr.innerHTML = `
    <td>${item.ideias}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  e.preventDefault();

  if (sideias.value === '') {
    return;
  }

  if (id !== undefined) {
    itens[id].ideias = sideias.value;
  } else {
    itens.push({ 'ideias': sideias.value });
  }

  setItensBD();
  modal.classList.remove('active');
  loadItens();
  id = undefined;
}

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbideiass')) ?? [];
const setItensBD = () => localStorage.setItem('dbideiass', JSON.stringify(itens));

loadItens();
