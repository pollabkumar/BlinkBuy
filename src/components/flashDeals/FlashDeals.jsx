import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Deals</h1>
            {/* <img src="./images/flash/flash-1.png" alt="" /> */}
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
