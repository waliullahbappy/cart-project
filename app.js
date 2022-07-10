// // Selection for first cart

let count = document.getElementById('count')
let increaseBtn = document.getElementById('increaseBtn')
let decreaseBtn = document.getElementById('decreaseBtn')
let signleProductPrice = document.getElementById('signleProductPrice')
let removeItem = document.querySelector('.remove-item')
let cartItem = document.querySelector('.cart-item')
let subtotal = document.getElementById('subtotal')
let vat = document.getElementById('vat')
let grandTotal = document.getElementById('grandTotal')

// Selection For second Cart Item
let second_increaseBtn = document.getElementById('second_increaseBtn')
let second_count = document.getElementById('second_count')
let second_decreaseBtn = document.getElementById('second_decreaseBtn')
let second_signleProductPrice = document.getElementById('second_signleProductPrice')
let second_removeItem = document.getElementById('second_removeItem')
let second_cartItem = document.getElementById('second_cartItem')
// Selection For Third Cart Item
let third_increaseBtn = document.getElementById('third_increaseBtn')
let third_count = document.getElementById('third_count')
let third_decreaseBtn = document.getElementById('third_decreaseBtn')
let third_signleProductPrice = document.getElementById('third_signleProductPrice')
let third_removeItem = document.getElementById('third_removeItem')
let third_cartItem = document.getElementById('third_cartItem')
// Every Product Price
let productPrice = 259
let second_productPrice = 85
let third_productPrice = 159

// Functionality

increaseBtn.addEventListener('click',()=>{
//   console.log('clicked');
  let increaseCount = parseInt(count.value)
  increaseCount += 1
  count.value = increaseCount
  total()

})
decreaseBtn.addEventListener('click',()=>{
    let decreaseCount = parseInt(count.value)
    if(decreaseCount>1){
        decreaseCount -= 1
        count.value = decreaseCount
    }
    total()
})
removeItem.addEventListener('click',()=>{
    cartItem.remove()
    
})


// Second Cart Functionality
second_increaseBtn.addEventListener('click',()=>{
    // console.log('clicked');
    let second_increaseCount = parseInt(second_count.value)
    second_increaseCount += 1
    second_count.value = second_increaseCount
    total()
  
  })
  second_decreaseBtn.addEventListener('click',()=>{
    let second_decreaseCount = parseInt(second_count.value)
    if(second_decreaseCount>1){
        second_decreaseCount -= 1
        second_count.value = second_decreaseCount
    }
    total()
})
second_removeItem.addEventListener('click',()=>{
    // console.log('clicked');
    second_cartItem.remove()
    
})
// Third Cart Functionality
third_increaseBtn.addEventListener('click',()=>{
    console.log('clicked');
    let third_increaseCount = parseInt(third_count.value)
    third_increaseCount += 1
    third_count.value = third_increaseCount
    total()
  
  })
  third_decreaseBtn.addEventListener('click',()=>{
    let third_decreaseCount = parseInt(third_count.value)
    if(third_decreaseCount>1){
        third_decreaseCount -= 1
        third_count.value = third_decreaseCount
    }
    total()
})
third_removeItem.addEventListener('click',()=>{
    console.log('clicked');
    third_cartItem.remove()
    
})
function total(){
    // this is for first cart
    let perProductPrice = productPrice * count.value
    // console.log(perProductPrice);
    signleProductPrice.innerHTML = '$'+ perProductPrice
     // this is for second cart
    let second_perProductPrice = second_productPrice * second_count.value
    second_signleProductPrice.innerHTML = '$'+ second_perProductPrice 
     // this is for third cart 
    let third_perProductPrice = third_productPrice * third_count.value
    third_signleProductPrice.innerHTML = '$'+ third_perProductPrice

    let subtotalCount = perProductPrice + second_perProductPrice + third_perProductPrice
    subtotalCount = subtotalCount.toFixed(2)
    subtotal.innerHTML = '$'+ subtotalCount
    let tax = subtotalCount/100*15
    tax = tax.toFixed(2)
    vat.innerHTML = '$'+ tax
   let gTotal = parseFloat(tax)+parseFloat(subtotalCount)
  
   gTotal = Math.floor(gTotal)
   gTotal = gTotal.toFixed(2)
    grandTotal.innerHTML ='$'+ gTotal


}