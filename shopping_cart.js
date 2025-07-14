addEventListener("DOMContentLoaded" , ()=>{


    const addtoCartbtn = document.querySelector(".cart")
    const productBtn =document.querySelector(".product_frame")


    addtoCartbtn.addEventListener("click", (event)=>{
         event.preventDefault()

            console.log("Add to Cart Btn Was Clicked")
    })


    productBtn.addEventListener("click", (event)=>{

         event.preventDefault()

          console.log("productBtn Was Clicked")


    })

    



})