
const shirtPrice = document.getElementById('product-price');
const shoePrice = document.getElementById('shoe-price');
const pantPrice = document.getElementById('pant-price');
const watchPrice = document.getElementById('watch-price');
const subTotal = document.getElementById('sub-total');


const countNumber = document.getElementById('count-tshirt');
let countValue = parseInt(countNumber.innerText);

const productCount = (productId) => {

}


const productQuantity = (isAdd) => {
    if(isAdd == true){
        countValue++;
        countNumber.innerText = countValue;
    }else{
        if(countValue > 0){
        countValue--;
        countNumber.innerText = countValue;
    }}
}


const productAmount = (priceInput,price) => {
  const x =  document.getElementById(priceInput);
    x.innerText = countValue * price;
    subTotal.innerText = parseInt(shirtPrice.innerText) + parseInt(shoePrice.innerText) + parseInt(pantPrice.innerText);
} 



document.getElementById('plus-btn').addEventListener('click',function(){
    productQuantity(true)
    productAmount('product-price',150)
})

document.getElementById('minus-btn').addEventListener('click',function(){
    productQuantity(false)
    productAmount('product-price',150)
})
document.getElementById('plus-2').addEventListener('click',function(){
    productQuantity(true)
    productAmount('shoe-price',185)
})

document.getElementById('minus-2').addEventListener('click',function(){
    productQuantity(false)
    productAmount('shoe-price',185)
})