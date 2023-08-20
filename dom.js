var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentElement);