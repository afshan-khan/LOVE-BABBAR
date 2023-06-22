// script.js
document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.product button');
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var checkoutButton = document.getElementById('checkout');
  
    var total = 0;
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var product = this.parentNode;
        var productName
  