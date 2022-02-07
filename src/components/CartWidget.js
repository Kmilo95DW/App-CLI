

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-info position-relative">
                <img src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg" alt="carrito" width="21px" height="21px" />    
       <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
               <span class="visually-hidden">unread messages</span>
           </span>
   </button>
    );
}


export default CartWidget