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
    //console.log(`${i} key is ${Object.keys(cart[i])[0]} and value is $${Object.values(cart[i])[0]}`)
    if (i < (cart.length-1))
      output += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `;
    else if(i === (cart.length-1))
      output += `and ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`;
  }
  return output
}
