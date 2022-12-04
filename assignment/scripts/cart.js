console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem ( item ) {
    basket.push(item);
    return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding item Milk:', addItem('milk'));
console.log('Adding item Eggs:', addItem('eggs'));
console.log('Adding item Cheese:', addItem('cheese'));
console.log('Adding item Bread:', addItem('bread'));
console.log(`Basket is now ${basket}`);


function listItems () {
    for (let i = 0; i < basket.length; i++) {
        console.log('Listing item:', basket[i]);
      }
}
console.log(listItems());

function empty () {
    while(basket.length > 0) {
        basket.pop();
    }
}
