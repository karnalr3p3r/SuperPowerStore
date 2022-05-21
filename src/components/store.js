import React from 'react';
import "../style/store"

export default class theArsenal {
  render() {
    return (
      <div className="theArsenal">
        <section className="container content-section">
          <h2 className="section-header">SuperPowers</h2>
          <div className="shop-items">
            <div className="shop-item">
                <span className="shop-item-title">Flying</span>
                <img className="shop-item-image" src="#" />
                <div className="shop-item-details">
                    <span className="shop-item-price">$12.99</span>
                    <button className="btn entree-btn waitress btn-primary shop-item-button type" type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">SuperSpeed</span>
                <img className="shop-item-image" src="#" />
                <div className="shop-item-details">
                    <span className="shop-item-price">$4.00</span>
                    <button className=" btn waitress side-btn btn-primary shop-item-button type" type="button ">ADD TO CART</button>
                </div>
          </div>
        </div>
    </section>
    <section className="container content-section ">
        <h2 className="section-header ">CART</h2>
        <div className="cart-row ">
            <span className="cart-item cart-header cart-column ">ITEM</span>
            <span className="cart-price cart-header cart-column ">PRICE</span>
        </div>
        <div className="cart-items ">
        </div>
        <div className="cart-total ">
            <strong className="cart-total-title ">Total</strong>
            <span className="cart-total-price ">$0</span>
        </div>
        <button className="btn btn-primary btn-purchase " type="button ">PURCHASE</button>
      </section>
    </div>  
  )
  }
}
