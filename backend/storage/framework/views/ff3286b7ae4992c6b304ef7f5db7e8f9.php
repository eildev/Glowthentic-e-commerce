<section class="product-area whight-product pt-75 pb-80">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h5 class="tpdescription__product-title mb-20">Related Products</h5>
            </div>
        </div>

        <?php
            $brand = App\Models\Brand::where('BrandName', 'like', '%' . 'Local' . '%')->first();
            $products = App\Models\Product::whereHas('varient')
                ->where('brand_id', $brand->id)
                ->take(10)
                ->orderBy('id', 'ASC')
                ->get();
        ?>
        <div class="tpproduct__arrow double-product p-relative">
            <div class="swiper-container tpproduct-active tpslider-bottom p-relative">
                <div class="swiper-wrapper">
                    <?php if($products->count() > 0): ?>
                        <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="swiper-slide">
                                <div class="tpproduct p-relative">
                                    <div class="tpproduct__thumb p-relative text-center">
                                        <a href="<?php echo e(route('product.details', $product->slug)); ?>"><img
                                                src="<?php echo e(asset('uploads/products/' . $product->product_image)); ?>"
                                                alt=""></a>
                                        <a class="tpproduct__thumb-img"
                                            href="<?php echo e(route('product.details', $product->slug)); ?>"><img
                                                src="<?php echo e(asset('uploads/products/' . $product->product_image)); ?>"
                                                alt=""></a>
                                        <div class="tpproduct__info bage">
                                            <?php if($product->varient[0]->discount > 0): ?>
                                                <span
                                                    class="tpproduct__info-discount bage__discount">-<?php echo e($product->varient[0]->discount); ?>%</span>
                                            <?php endif; ?>
                                            <?php if($product->varient[0]->discount > 0): ?>
                                                <span class="tpproduct__info-hot bage__hot">HOT</span>
                                            <?php endif; ?>
                                        </div>
                                        <div class="tpproduct__shopping">
                                            <?php if(auth()->guard()->check()): ?>
                                                <a class="tpproduct__shopping-wishlist add_whishlist" href="#"
                                                    value="<?php echo e($product->id); ?>">
                                                    <!-- <i class="icon-heart icons"></i> -->
                                                    <?php if(auth()->guard()->check()): ?>
                                                        <?php
                                                            $loved = App\Models\WishList::where('user_id', Auth::user()->id)
                                                                ->where('product_id', $product->id)
                                                                ->first();
                                                        ?>
                                                    <?php endif; ?>
                                                    <i style="color: <?php echo e(!empty($loved->loved) ? 'red' : ''); ?>"
                                                        class="fas fa-heart icons"></i>
                                                </a>
                                            <?php else: ?>
                                                <a class="tpproduct__shopping-wishlist" href="<?php echo e(route('login')); ?>">
                                                    <i class="fas fa-heart icons"></i>
                                                </a>
                                            <?php endif; ?>
                                            <a class="tpproduct__shopping-cart"
                                                href="<?php echo e(route('product.details', $product->slug)); ?>">
                                                <i class="icon-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tpproduct__content">
                                        <span class="tpproduct__content-weight">
                                            <a
                                                href="<?php echo e(route('category.wise.product', $product->category->slug)); ?>"><?php echo e($product->category->categoryName); ?></a>
                                        </span>
                                        <h4 class="tpproduct__title">
                                            <a
                                                href="<?php echo e(route('product.details', $product->slug)); ?>"><?php echo e($product->product_name); ?></a>
                                        </h4>
                                        <div class="tpproduct__rating mb-5">
                                            <?php
                                                $indivitualReviews = App\Models\ReviewRating::where('product_id', $product->id)->get();
                                                $indivitualRatingAvg = App\Models\ReviewRating::where('product_id', $product->id)->avg('rating');
                                            ?>
                                            <?php
                                                $last = 0;
                                            ?>
                                            <?php for($i = 1; $i <= $indivitualRatingAvg; $i++): ?>
                                                <a href="#"><i class="icon-star"></i></a>
                                                <?php $last = $i ?>
                                            <?php endfor; ?>
                                            <?php for($j = $last; $j < 5; $j++): ?>
                                                <a href="#"><i class="icon-star_outline1"></i></a>
                                            <?php endfor; ?>
                                            (<?php echo e($indivitualReviews->count()); ?>)
                                        </div>
                                        <div class="tpproduct__price">

                                            <span>৳<?php echo e($product->varient[0]->discount_amount ?? ''); ?></span>
                                            <?php if($product->varient[0]->discount > 0): ?>
                                                <del>৳<?php echo e($product->varient[0]->regular_price ?? ''); ?></del>
                                            <?php endif; ?>
                                            <span>/<?php echo e($product->varient[0]->unit); ?></span>
                                        </div>
                                    </div>
                                    <div class="tpproduct__hover-text">
                                        <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                            <form method="POST" id="add_to_cart_form">
                                                <?php echo csrf_field(); ?>
                                                <input type="hidden" value="<?php echo e($product->id); ?>" name="product_id">
                                                <input type="hidden" value="<?php echo e($product->varient[0]->id); ?>"
                                                    name="variant_id">
                                                <input type="hidden"
                                                    value="<?php echo e($product->varient[0]->discount_amount); ?>"name="selling_price">
                                                <input type="hidden" value="<?php echo e($product->varient[0]->weight); ?>"
                                                    name="weight">
                                                <input type="hidden" value="<?php echo e($product->varient[0]->unit); ?>"
                                                    name="unit">
                                                <button class="tp-btn-2">Add to cart</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/frontend/pageContent/recommendedProduct.blade.php ENDPATH**/ ?>