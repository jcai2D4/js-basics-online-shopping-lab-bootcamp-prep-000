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
  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  for(let i = 0 ; i < cart.length; i++){
    //console.log(`${i} key is ${Object.keys(cart[i])[0]} and value is $${Object.values(cart[i])[0]}`)
   var objKey = Object.keys(cart[i])[0];
   var objValue = cart[i][objKey]
   if(cart.length===1)
    console.log(`In your cart you have ${Object.keys(cart[0])[0]} at $${cart[0][objKey]}`)
    if (cart.length === 2)
      console.log(`In your cart you have ${Object.keys(cart[0])[0]} at $${cart[0][objKey]} and ${Object.keys(cart[1])[0]} at $${cart[1][objKey]}.`)
    if(cart.lenght>2) {
    if (i < (cart.length-1))
      output += `${objKey} at $${objValue}, `;
    else if(i === (cart.length-1))
      output += `and ${objKey} at $${objValue}.`;
    }
  }
  console.log(output);
}
