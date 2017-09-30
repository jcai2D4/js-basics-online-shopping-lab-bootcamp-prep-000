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
  var newItem = {name:item, price:randomPrice}
  Object.assign({}, newItem)
  const output = {[item]: randomPrice};
  cart.push(output)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var output = []
  console.log(cart);
  if (cart.length===0)
    return "Your shopping cart is empty."
  for(let i = cart.length; i>0; i--){
    if(cart.length>3)
      return "";
    if (cart.length===2)
      return(`In your cart you have ${cart[0]} at $${cart[0]} and ${cart[1]} at $${cart[1]}`)
  }
}

addToCart("bananas")
addToCart("pancakes")
addToCart("eggs")
viewCart()
//console.log(cart.length)
