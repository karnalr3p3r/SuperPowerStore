import React from 'react';
import "../style/store"

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

var entree = 1;

var sides = 2;

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}




function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}



function addItemToCart(title, price, imageSrc, entree, side) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]

  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }

  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
}


function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      total = total + (price)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


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
