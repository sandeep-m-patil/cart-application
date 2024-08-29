
let cartlist = JSON.parse(localStorage.getItem("data")) || []



function show_cart(){

    if(cartlist.length!==0){
        let a = ``;

        cartlist.forEach((item) => {
            a += `
      <div class="card-cart">
        <div><img  src=${item.img} alt=${item.title}></div>
        <div><h3 class="ptext">${item.name}</h3></div>
        <div><p  class="ptext">₹${item.price}</p></div>
       <div><button onclick="remove_item(${cartlist.indexOf(item)})">Remove</button></div>
      </div>
            `
    
    
        });
    
    
        document.querySelector('.carts').innerHTML = a;   

show_total()
    
    }

else{
    document.querySelector('.carts').innerHTML=`<h3 style="text-align:center">Shopping Cart is Empty</h3>`;

}


 

}

show_cart()



function remove_item(i){
    
    let index=cartlist.indexOf(cartlist[i])
    cartlist.splice(index,1)
    localStorage.setItem("data",JSON.stringify(cartlist))
    show_cart()
    show_total()



}

function show_total(){

    let total=0;

    cartlist.forEach((item) => {
        total+=item.price;
    })

    document.getElementById("cart-bill").innerHTML=`<h3 style="text-align:center">Total Bill is : ${total}</h3>`;
   
}


function logout(){
    window.location.href = "index.html";
}