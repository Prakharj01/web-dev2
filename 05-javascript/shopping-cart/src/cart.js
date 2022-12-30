let basket=JSON.parse(localStorage.getItem("data"))|| [];
let shoppingCart=document.getElementById('shopping-cart')
let label=document.getElementById('label')

function calculation(){
    let cartIcon=document.getElementById('cartAmount');
  var total=basket.map((x)=>x.item).reduce((x,y)=> x+y,0)
 // console.log(basket.map((x)=>x.item).reduce((x,y)=> x+y,0))
  cartIcon.innerHTML=total
}

label.innerHTML="<h1></h1>"
calculation()
let generateCartItems=()=>{
    if (basket.length==0){
        console.log("basket is empty. !")
        shoppingCart.innerHTML="";
        label.innerHTML=`<h2 class="emptyCart">Cart is Empty</h2>
        <a href="index.html">
        <button class="backCart">Back to Home</button>
        </a>` 
    }
    else{
        //console.log(basket)
        shoppingCart.innerHTML=basket.map((x)=>{
let searchItem=shopItemsData.find((selectItem)=>x.id===selectItem.id)
           // console.log(searchItem)
            return `<div class="cartItem">
          <img width="100" src=${searchItem.img} alt="image ">
          
          <div class="details">
          <div class="title-price-x">
          <h4>
          <p>${searchItem.name} &nbsp; <span class="cart-price">$${searchItem.price}</span></p>
          </h4>
          <i class="bi bi-x-lg" onclick="removeItem(${searchItem.id})"></i>

          </div>
          <div class="buttons">
          <i onclick="decrement(${searchItem.id})" class="bi bi-dash-lg"></i>
          <div id="${x.id}">${x.item}</div>
          <i onclick="increment(${searchItem.id})" class="bi bi-plus-lg"></i>
          </div>
          <span class="cart-price-total">$ ${x.item * searchItem.price}</div>

          </div>
            </div>
            `

        }).join("")
    }
    totalAmount()
}


let increment= (id)=>{
    //console.log("increment")
    let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems()

  }

  function decrement(id){
    let selectedItem=id;
    let search=basket.find((x)=>selectedItem.id===x.id    )
  

    if (search===undefined) return;
else if (search.item===0){
    return;
}
else{
    search.item-=1
}

update(selectedItem.id);

basket=basket.filter((x)=>
    x.item!==0)

localStorage.setItem("data",JSON.stringify(basket))
generateCartItems()
      }

  function update(id){
    //console.log(id)

    let search=basket.find((x)=>x.id===id )
    //console.log(search.item)
    document.getElementById(id).innerHTML=search.item;
    calculation()
totalAmount();

      }


      function calculation(){
        let cartIcon=document.getElementById('cartAmount');
      var total=basket.map((x)=>x.item).reduce((x,y)=> x+y,0)
     // console.log(basket.map((x)=>x.item).reduce((x,y)=> x+y,0))
      cartIcon.innerHTML=total

    }
    calculation()
generateCartItems()


function removeItem(id){
let selectedItem=id;

basket=basket.filter((x)=>x.id!==selectedItem.id);
localStorage.setItem("data",JSON.stringify(basket))
generateCartItems();
calculation(); 

}

function totalAmount(){
    if (basket.length!==0){
    let amount=basket.map((x)=>{
        let shopid=shopItemsData.find((y)=>y.id===x.id);
        return shopid.price*x.item
    }).reduce((total,y)=>total+y,0)
    console.log(amount)
    label.innerHTML=`<h2> Total Bill: $ ${amount}</h2>
    <div class="button">
    <button class="checkout-button cartpagebutton">Checkout</button> 
    <button class="clearcart-button cartpagebutton" onclick="clearCart()">Clear Cart</button> 
    </div>`
}
else return;
}

function clearCart(){
    basket=[]
    generateCartItems();
    console.log("cart is cleared");
    localStorage.setItem("data",JSON.stringify(basket))
}
