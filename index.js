var cart = [];

function getCart(){
  return cart;
}

function setCart(c){
  cart = c;
  return cart;
}


function addToCart(item) {
  var randomPrice = Math.floor((Math.random()*100)+1)
  var output = Object.assign({[item]: randomPrice});
  cart.push(output)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var output = "In your cart, you have "
  if (cart.length===0)
    return "Your shopping cart is empty."
  for(let i = 0 ; i < cart.length; i++){
    console.log(`${i} key is ${Object.keys(cart[i])[i]} and value is ${Object.values(cart[i])[i]}`)
    if (i=== cart.length)
      output += `and ${Object.keys(cart[i])[i]} at ${Object.values(cart[i])[i]}.`
    else
      output += `and ${Object.keys(cart[i])[i]} at ${Object.values(cart[i])[i]}, `
}

//console.log(cart.length)