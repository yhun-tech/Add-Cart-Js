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


    }
    totalPrice.textContent = `$${total}`


}
updateCartTotal()






const feed_frame =  document.querySelector(".feed_frame")
function displayProducts(){

   return feed_frame.innerHTML  = `
    
      <div href="" class="product_frame">

                                        <a href="" class="pd_box pd_image_box">

                                                <img class="product_image"  src="Images/BAG 2.PNG" width="100">
                                        
                                        </a>

                                        <div class="pd_box pd_name_box">

                                              <p class="pd-left-content product_name">Beige Sling Bag</p>
                                                
                                        </div>


                                        <div class="pd_box pd_price_cart_box">

                                                 <p class="pd-left-content price">$250</p>
                                                 <button type="submit" class="add_to_cart">+</button>

                                        </div>

                                </div>
                                 


                                 <!-- PRODUCT 2  -->
                                <div href="" class="product_frame">

                                     <a href=" ", class="pd_box pd_image_box">

                                                <img class="product_image" src="Images/T7.PNG" width="100">
                                        
                                     </a>

                                        <div class="pd_box pd_name_box">

                                           <p class="pd-left-content product_name">White Ribbon Dress</p>
                                                
                                        </div>


                                        <div class="pd_box pd_price_cart_box">

                                                <p class="pd-left-content price">$500</p>
                                                 <button type="submit" class="add_to_cart">+</button >
                                                
                                        </div>

                                </div > 
                                

                                
                                <!-- PRODUCT 3  -->
                                <div href="" class="product_frame">

                                        <a href="" class="pd_box pd_image_box">

                                                <img class="product_image"  src="Images/T10].PNG" width="140">
                                        
                                        </a>

                                        <div class="pd_box pd_name_box">

                                                <p class="pd-left-content product_name">White Long Sleeve Women</p>
                                                
                                        </div>


                                        <div class="pd_box pd_price_cart_box">

                                                 <p class="pd-left-content price">$390</p>
                                                 <button type="submit" class="add_to_cart">+</button >
                                        </div>

                                </div> 


                                   <!-- PRODUCT 4  -->
                                <div href="" class="product_frame">


                                        <a class="pd_box pd_image_box">

                                                <img class="product_image"  src="Images/T8.PNG" width="100">
                                        
                                        </a>

                                        <div class="pd_box pd_name_box">

                                                <p class="pd-left-content product_name">Pink Fluffy Dress</p>
                                                
                                        </div>


                                        <div class="pd_box pd_price_cart_box">

                                                 <p class="pd-left-content price">$600</p>
                                                 <button type="submit" class="add_to_cart">+</button >

                                        </div>

                                </div> 

                                   <!-- PRODUCT 5  -->
                                <div href="" class="product_frame">


                                        <a class="pd_box pd_image_box">

                                                <img  class="product_image" src="Images/SK1_.PNG" width="140">
                                        
                                        </a>

                                        <div class="pd_box pd_name_box">

                                                <p class="pd-left-content product_name">School Girl Skirt</p>
                                                
                                        </div>


                                        <div class="pd_box pd_price_cart_box">

                                                 <p class="pd-left-content price">$540</p>
                                                 <button type="submit"  class="add_to_cart">+</button >

                                        </div>

                                </div> 

    `
}


displayProducts()


function getFeedData(){

    const product_frames = document.getElementsByClassName("product_frame")
 
    for(let i = 0; i < product_frames.length; i++){

        let product_image = document.getElementsByClassName("product_image")[i]
        let product_name = document.getElementsByClassName("product_name")[i]
        let product_price = document.getElementsByClassName("price")[i]
        let add_to_cart_btn = document.getElementsByClassName("add_to_cart")[i]

        let product_name_value  = product_name.innerText
        let  product_price_value = product_price.innerText

        console.log(product_image)
        console.log(product_name_value)
        console.log(product_price_value)
        console.log(add_to_cart_btn )
    
    }


}

getFeedData()


