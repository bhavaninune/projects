var form = document.getElementById('my-form');
var itemList = document.getElementById('items');
var itemList1 = document.getElementById('items1');
var msg = document.querySelector('.msg');

form.addEventListener('submit', addItem);


document.addEventListener('DOMContentLoaded', loadItems);
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById('name').value;
  var newItemm = document.getElementById('email').value;
  var newItemmm = document.getElementById('number').value;

  if (newItem === '' || newItemm === '' || newItemmm === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please add all fields';
    setTimeout(function () {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 1000);
  } else {
    
    var li = document.createElement('li');
    
    li.className = 'list-group-item';
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' ' + newItemm));
    li.appendChild(document.createTextNode(' ' + newItemmm));

    
    var deleteBtn = document.createElement('button');
    
    deleteBtn.className = 'btn btn-danger btn-xsm float-right delete';
    
    deleteBtn.appendChild(document.createTextNode('x'));
    
    li.appendChild(deleteBtn);
    
    if(newItemmm=='Table 1'){
    itemList.appendChild(li);
    }
    else{
      itemList1.appendChild(li);
    }
    var itemData = {
      name: newItem,
      email: newItemm,
      number: newItemmm,
    };
    axios
      .post('https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data', itemData)
      .then((response) => {
        console.log(response);
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('number').value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

document.addEventListener('DOMContentLoaded', loadItems);

function loadItems() {
  axios
    .get('https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data')
    .then((response) => {
      const data = response.data;
      for (var i = 0; i < data.length; i++) {
        var itemData = data[i];
        
        var li = document.createElement('li');
        
        li.className = 'list-group-item';
        li.setAttribute('data-id', itemData._id);

        li.appendChild(document.createTextNode(itemData.name));
        li.appendChild(document.createTextNode(' ' + itemData.email));
        li.appendChild(document.createTextNode(' ' + itemData.number));

        var deleteBtn = document.createElement('button');
        
        deleteBtn.className = 'btn btn-danger btn-xsm float-right delete';
      
        deleteBtn.appendChild(document.createTextNode('x'));
      
        li.appendChild(deleteBtn);
        
        if(itemData.number=='Table 1'){
          itemList.appendChild(li);
          }
          else{
            itemList1.appendChild(li);
          }
      }
    });
}

itemList.addEventListener('click', function (e) {
  removeItem(e);
});

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    var id = li.getAttribute('data-id');
    axios
      .delete(`https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data/${id}`)
      .then((response) => {
        console.log('Item deleted from CRUD API:', response);

        
        itemList.removeChild(li);
      })
      .catch((err) => {
        console.log('Error deleting item:', err);
      });
  }
}
itemList1.addEventListener('click', function (e) {
  removeItemm(e);
});
function removeItemm(e) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    var id = li.getAttribute('data-id');
    axios
      .delete(`https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data/${id}`)
      .then((response) => {
        console.log('Item deleted from CRUD API:', response);
        itemList1.removeChild(li);
      })
      .catch((err) => {
        console.log('Error deleting item:', err);
      });
  }
}

