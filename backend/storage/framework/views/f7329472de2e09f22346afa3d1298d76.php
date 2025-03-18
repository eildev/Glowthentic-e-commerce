<!-- cart Area start -->
<div class="tpcartinfo tp-cart-info-area p-relative">
    <button class="tpcart__close"><i class="icon-x"></i></button>
    <div class="tpcart">
        <h4 class="tpcart__title">Your Cart</h4>
        <div class="tpcart__product">
            <div class="tpcart__product-list">
                <ul class="cart_container">

                </ul>
            </div>
            <div class="tpcart__checkout">
                <div class="tpcart__total-price d-flex justify-content-between align-items-center">
                    <span> Subtotal: </span>
                    <span class="heilight-price"></span>
                </div>
                <div class="tpcart__checkout-btn">
                    <a class="tpcart-btn mb-10" href="<?php echo e(route('product.show_cart_products')); ?>">View Cart</a>
                    <!--<a class="tpcheck-btn" href="<?php echo e(route('checkout')); ?>">Checkout</a>-->
                    <?php if(Cart::count() > 0): ?>
                        <a class="tpcheck-btn" href="<?php echo e(route('checkout')); ?>">Checkout</a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
    </div>
</div>
<div class="cartbody-overlay"></div>
<!-- cart Area end -->
<?php /**PATH C:\Users\Eclipse\Desktop\office task\Glowthentic-e-commerce\backend\resources\views/frontend/body/cartArea.blade.php ENDPATH**/ ?>