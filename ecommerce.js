var form = document.getElementById('my-form');
var itemList = document.getElementById('ei');
var itemList1 = document.getElementById('fi');
var itemList2 = document.getElementById('sc');
var msg = document.querySelector('.msg');

form.addEventListener('submit', addItem);


document.addEventListener('DOMContentLoaded', loadItems);
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById('sellingprice').value;
  var newItemm = document.getElementById('productname').value;
  var newItemmm = document.getElementById('text').value;

  if (newItem === '' || newItemm === '' || newItemmm === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please add all fields';
    setTimeout(function () {
      msg.innerHTML = '';
      msg.classList.remove('error');
    }, 1000);
  } else {

    var li = document.createElement('li');
    //li.setAttribute('data-id', response.data._id);

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' ' + newItemm));
    li.appendChild(document.createTextNode(' ' + newItemmm));


    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-xsm float-right delete';

    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);

    if(newItemmm == 'electronic items') {
        itemList.appendChild(li);
    } else if (newItemmm == 'food items') {
        itemList1.appendChild(li);
    } else if(newItemmm == 'skin care'){
        itemList2.appendChild(li);
    }
    
    var itemData = {
      sellingprice: newItem,
      productname: newItemm,
      text: newItemmm,
    };
    axios
      .post('https://crudcrud.com/api/05bca2240c9c417e927576657592041a/data', itemData)
      .then((response) => {
        console.log(response);

        document.getElementById('sellingprice').value = '';
        document.getElementById('productname').value = '';
        document.getElementById('text').value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

document.addEventListener('DOMContentLoaded', loadItems);

function loadItems() {
  axios
    .get('https://crudcrud.com/api/05bca2240c9c417e927576657592041a/data')
    .then((response) => {
      const data = response.data;
      for (var i = 0; i < data.length; i++) {
        var itemData = data[i];

        var li = document.createElement('li');
        //var id = li.getAttribute('data-id');

        li.className = 'list-group-item';
        li.setAttribute('data-id', itemData._id);
        

        li.appendChild(document.createTextNode(itemData.sellingprice));
        li.appendChild(document.createTextNode(' ' + itemData.productname));
        li.appendChild(document.createTextNode(' ' + itemData.text));

        var deleteBtn = document.createElement('button');

        deleteBtn.className = 'btn btn-danger btn-xsm float-right delete';

        deleteBtn.appendChild(document.createTextNode('x'));

        li.appendChild(deleteBtn);

        if(itemData.text=='electronic items'){
          itemList.appendChild(li);
          }
          else if(itemData.text=='food items')
          {
            itemList1.appendChild(li);
          }else if(itemData.text == 'skin care')
          {
            itemList2.appendChild(li);
          }

          }
      
    });
}

itemList.addEventListener('click', function (e) {
  removeItem(e,itemList);
});

function removeItem(e,list) {
  if (e.target.classList.contains('delete')) {
    var li = e.target.parentElement;
    var id = li.getAttribute('data-id');
    axios
      .delete(`https://crudcrud.com/api/05bca2240c9c417e927576657592041a/data/${id}`)
      .then((response) => {
        console.log('Item deleted from CRUD API:', response);

        list.removeChild(li);
       // itemList.removeChild(li);
      })
      .catch((err) => {
        console.log('Error deleting item:', err);
      });
  }
}
itemList1.addEventListener('click', function (e) {
    removeItem(e, itemList1);
});
// function removeItemm(e) {
//   if (e.target.classList.contains('delete')) {
//     var li = e.target.parentElement;
//     var id = li.getAttribute('data-id');
//     axios
//       .delete(`https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data/${id}`)
//       .then((response) => {
//         console.log('Item deleted from CRUD API:', response);
//         itemList1.removeChild(li);
//       })
//       .catch((err) => {
//         console.log('Error deleting item:', err);
//       });
//   }
// }
itemList2.addEventListener('click', function (e) {
    removeItem(e, itemList2);
  });
//   function removeItemmm(e) {
//     if (e.target.classList.contains('delete')) {
//       var li = e.target.parentElement;
//       var id = li.getAttribute('data-id');
//       axios
//         .delete(`https://crudcrud.com/api/b66c772da88b4715ade0df599a218efd/data/${id}`)
//         .then((response) => {
//           console.log('Item deleted from CRUD API:', response);
//           itemList2.removeChild(li);
//         })
//         .catch((err) => {
//           console.log('Error deleting item:', err);
//         });
//     }
//   }