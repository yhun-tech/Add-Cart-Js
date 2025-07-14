if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready)
}else{

    ready()

}


function ready(){   

    const removeCartItemBtn =  document.getElementsByClassName("remove")
    
    // REMOVE ITEM BUTTON
    for(let i =0; i < removeCartItemBtn.length; i++){
            let button = removeCartItemBtn[i]
            button.addEventListener("click", removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName("quantity")
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i]
        console.log(input)

        input.addEventListener("change",quantityChanged)
    }


}

function removeCartItem(event){

        event.preventDefault()
        let targetButton = event.target
        targetButton.parentElement.parentElement.remove()
        
        updateCartTotal()

}

function quantityChanged(event){
    let input = event.target

    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()

}










function updateCartTotal(){
    
    const cartRows = document.getElementsByClassName("data_tr")
    const totalPrice = document.getElementById("total_price")

    let total = 0;
    for (let i =0;i < cartRows.length;i++){
            let cartRow = cartRows[i]
            
            let priceElement = cartRow.getElementsByClassName("td_price")[0]
            let quantityElement = cartRow.getElementsByClassName("quantity")[0]


            let price = parseFloat(priceElement.innerText.replace("$",""))
            let quantity = parseInt(quantityElement.value)

            total += (price * quantity)
        
            // console.log(price,quantity)

    }
    totalPrice.textContent = `$${total}`


}
updateCartTotal()



