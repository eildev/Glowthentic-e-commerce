<!-- cart-area-start -->
<section class="cart-area">
    <div class="container">
        <div class="swiper-container product-details-active">
            <!--<h4></h4>-->
             <div class="row">
                 <h4 class="tpsection__title text-start brand-product-title pt-2 text-center" id="weekly_offers">Our Popular Categories</h4>
             </div>
            <div class="row"  style="justify-content: center;">
                
                <?php
                    $Categories = App\Models\Category::where('status', 1)
                        ->has('products')
                        ->take(9)
                        ->orderBy('categoryName', 'ASC')
                        ->get();
                ?>
                <?php if($Categories->count() > 0): ?>
                    <?php $__currentLoopData = $Categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $Category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-lg-2 col-md-3 col-4">
                            <div class="tpcartitem">
                                <div class="tpcartitem__thumb text-center ">
                                    <a href="<?php echo e(route('browssubcategory',$Category->slug)); ?>">
                                        <img src="<?php echo e(asset('uploads/category/' . $Category->image)); ?>"
                                            alt="<?php echo e($Category->slug); ?>" class="img-fluid" style="height: 120px; object-fit: cover;" >
                                    </a>
                                    <span class="category-span"><?php echo e($Category->categoryName); ?></span>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php else: ?>
                    <div class="swiper-slide">
                        <div class="tpcartitem">
                            <div class="tpcartitem__thumb mb-15">
                                <a href="#"><img src="<?php echo e(asset('frontend')); ?>/assets/img/cart/cart-1.jpg"
                                        alt=""></a>
                            </div>
                            <div class="tpcartitem__content">
                                <h3 class="tpcartitem__title mb-15"><a href="shop-3.html">Fresh Vegetables</a>
                                </h3>
                                <ul>
                                    <li><a href="shop-details-4.html">Exotic Fruits & Veggies</a></li>
                                    <li><a href="shop-details-3.html">Fresh Fruits jihadtfhdthdty</a></li>
                                    <li><a href="shop-details-3.html">Fresh Vegetables</a></li>
                                    <li><a href="shop-details-4.html">Herbs & Seasonings</a></li>
                                </ul>
                                <span class="tpcartitem__all"><a href="shop-3.html">See All <i
                                            class="icon-chevron-right"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

            </div>
        </div>
    </div>
</section>
<!-- cart-area-end -->
<?php /**PATH E:\live Projects\Glowthentic\Glowthentic-e-commerce\backend\resources\views/frontend/indexContent/cartArea.blade.php ENDPATH**/ ?>