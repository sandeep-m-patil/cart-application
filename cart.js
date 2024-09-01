let name = localStorage.getItem("loginname")

document.getElementById('name').innerHTML = `<h1>Welcome ${name}<h1>`



let cartlist = JSON.parse(localStorage.getItem("data")) || []



function show_cart() {

    console.table(cartlist)
    if (cartlist.length !== 0) {
        let a = ``;

        cartlist.forEach((item) => {
            a += `
                <div class="card-cart">
                  <div><img  src=${item.img} alt=${item.title}></div>
                  <div><h3 class="ptext">${item.name}</h3></div>
                  <div><p  class="ptext">₹ ${item.price} X 
<button onclick="count(${cartlist.indexOf(item)},-1)">-</button> ${item.quantity} 

<button onclick="count(${cartlist.indexOf(item)},+1)">+</button></p></div>
                 <div><button class="rmbtn" onclick="remove_item(${cartlist.indexOf(item)})">Remove</button></div>
                </div>
                      `
        });


        document.querySelector('.carts').innerHTML = a;

        show_total()

    }

    else {
        document.querySelector('.carts').innerHTML = `<h3 style="text-align:center">Shopping Cart is Empty</h3>`;

    }




}

show_cart()

function count(i,c){
    let index = cartlist.indexOf(cartlist[i])
    cartlist[index].quantity+=c;
    if(cartlist[index].quantity<=0){
remove_item(i)
    }
    else{
        localStorage.setItem("data", JSON.stringify(cartlist))
        show_cart()
        show_total()
    
    }
    
}

function remove_item(i) {

    let index = cartlist.indexOf(cartlist[i])
    cartlist.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(cartlist))
    show_cart()
    show_total()



}

function show_total() {

    let total = 0;

    cartlist.forEach((item) => {
        total += item.price * item.quantity;
    })

    document.getElementById("cart-bill").innerHTML = `<h3 style="text-align:center">Total Bill is : ${total}</h3>`;

}


function logout() {
    window.location.href = "index.html";
}