<?php
     $categories = App\Models\Category::where('status', 1)->get();
   
    $flash_selling_product = App\Models\Product::whereHas('category', function ($query) {
        $query->where('status', 1);
    })
    ->whereHas('varient')
    ->where('status', 1)
    ->inRandomOrder() 
    ->take(40)
    ->get();
?>

<?php if($flash_selling_product->count() > 0): ?>
    <section class="weekly-product-area grey-bg whight-product">
        <div class="container">
            <div class="sections__wrapper white-bg pr-50 pl-50">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                        <div class="tpsection mb-15">
                            <h4 class="tpsection__title text-start brand-product-title pt-2" id="weekly_offers">Our All Products</h4>
                        </div>
                    </div>
                    <!--<div class="col-md-6">-->
                    <!--    <div class="tpproduct__all-item">-->
                    <!--        <a href="<?php echo e(route('all.feature.product')); ?>">View All <i class="icon-chevron-right"></i></a>-->
                    <!--    </div>-->
                    <!--</div>-->
                </div>
                <div class="row" >
                    <?php $__currentLoopData = $flash_selling_product; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-lg-3 col-md-4 col-6 my-1 p-1">
                            <div class="">
                                <div class="tpproduct p-relative tpprogress__hover">
                                    <div class="tpproduct__thumb p-relative text-center">
                                        <a href="<?php echo e(route('product.details', $product->slug)); ?>"><img
                                                src="<?php echo e(asset('uploads/products/' . $product->product_image)); ?>"
                                                alt="<?php echo e($product->slug); ?>" ></a>
                                        <a class="tpproduct__thumb-img"
                                            href="<?php echo e(route('product.details', $product->slug)); ?>"><img
                                                src="<?php echo e(asset('uploads/products/' . $product->product_image)); ?>"
                                                alt="<?php echo e($product->slug); ?>" ></a>
                                        <div class="tpproduct__info bage">
                                            <?php if(!empty($product->varient[0])): ?>
                                                <?php if($product->varient[0]->discount > 0): ?>
                                                    <span
                                                        class="tpproduct__info-discount bage__discount">-<?php echo e($product->varient[0]->discount ?? ''); ?>%</span>
                                                    <span
                                                        class="tpproduct__info-hot bage__hot">HOT</span>
                                                <?php endif; ?>
                                            <?php endif; ?>
                                        </div>
                                        <div class="tpproduct__shopping">
                                            <?php if(auth()->guard()->check()): ?>
                                                <a class="tpproduct__shopping-wishlist add_whishlist"
                                                    href="#" value="<?php echo e($product->id); ?>">
                                                    <?php if(auth()->guard()->check()): ?>
                                                        <?php
                                                            $loved = App\Models\WishList::where(
                                                                'user_id',
                                                                Auth::user()->id,
                                                            )
                                                                ->where('product_id', $product->id)
                                                                ->first();
                                                        ?>
                                                    <?php endif; ?>
                                                    <i style="color: <?php echo e(!empty($loved->loved) ? 'red' : ''); ?>"
                                                        class="fas fa-heart icons"></i>
                                                </a>
                                            <?php else: ?>
                                                <a class="tpproduct__shopping-wishlist"
                                                    href="<?php echo e(route('login')); ?>">
                                                    <i class="fas fa-heart icons"></i>
                                                </a>
                                            <?php endif; ?>
                                            <a class="tpproduct__shopping-cart"
                                                href="<?php echo e(route('product.details', $product->slug)); ?>"><i
                                                    class="icon-eye"></i></a>
                                        </div>
                                    </div>
                                    <div class="tpproduct__content">
                                        <span class="tpproduct__content-weight">
                                            <a
                                                href="<?php echo e(route('category.wise.product', $product->category->slug)); ?>"><?php echo e($product->category->categoryName); ?>

                                            </a>
                                        </span>
                                        <h4 class="tpproduct__title">
                                            <a
                                                href="<?php echo e(route('product.details', $product->slug)); ?>"><?php echo e(Illuminate\Support\Str::limit($product->product_name, 18)); ?></a>
                                        </h4>
                                        <div class="tpproduct__rating mb-5">
                                            <?php
                                                $ratingAvg = App\Models\ReviewRating::where(
                                                    'product_id',
                                                    $product->id,
                                                )->avg('rating');
                                            ?>
                                            <?php
                                                $last = 0;
                                            ?>
                                            <?php for($i = 1; $i <= $ratingAvg; $i++): ?>
                                                <a href="#"><i class="icon-star"></i></a>
                                                <?php $last = $i ?>
                                            <?php endfor; ?>
                                            <?php for($j = $last; $j < 5; $j++): ?>
                                                <a href="#"><i class="icon-star_outline1"></i></a>
                                            <?php endfor; ?>
                                        </div>
                                        <div class="tpproduct__price mb-5">
                                            <span>৳<?php echo e($product->varient[0]->discount_amount ?? ''); ?></span>
                                            <?php if(!empty($product->varient[0])): ?>
                                                <?php if($product->varient[0]->weight == 'gm' || $product->varient[0]->weight == 'ml'): ?>
                                                    <span class="text-secondary"
                                                        style="font-size: 14px">/<?php echo e($product->varient[0]->weight ?? ''); ?>

                                                        <?php echo e($product->varient[0]->unit ?? ''); ?></span>
                                                <?php else: ?>
                                                    <span class="text-secondary"
                                                        style="font-size: 14px">/<?php echo e($product->varient[0]->unit ?? ''); ?></span>
                                                <?php endif; ?>
                                            <?php endif; ?>

                                            <?php if(!empty($product->varient[0])): ?>
                                                <?php if($product->varient[0]->discount > 0): ?>
                                                    <del>৳<?php echo e($product->varient[0]->regular_price); ?></del>
                                                <?php endif; ?>
                                            <?php endif; ?>
                                        </div>
                                        <!--<div class="tpproduct__progress">-->
                                        <!--    <div class="progress mb-5">-->
                                        <!--        <div class="progress-bar w-25" role="progressbar"-->
                                        <!--            aria-label="Basic example" aria-valuenow="75"-->
                                        <!--            aria-valuemin="0" aria-valuemax="100"></div>-->
                                        <!--    </div>-->
                                        <!--    <span>Sold:-->
                                        <!--        <b>16/<?php echo e($product->varient[0]->stock_quantity); ?></b></span>-->
                                        <!--</div>-->
                                    </div>
                                    <div class="">
                                        <div
                                            class="tpproduct__hover-btn d-flex justify-content-center mb-0">
                                            <form method="POST" id="add_to_cart_form">
                                                <?php echo csrf_field(); ?>
                                                <input type="hidden" value="<?php echo e($product->id); ?>"
                                                    name="product_id">
                                                <input type="hidden"
                                                    value="<?php echo e($product->varient[0]->id); ?>"
                                                    name="variant_id">
                                                <input type="hidden"
                                                    value="<?php echo e($product->varient[0]->discount_amount); ?>"
                                                    name="selling_price">
                                                <input type="hidden"
                                                    value="<?php echo e($product->varient[0]->weight); ?>"
                                                    name="weight">
                                                <input type="hidden"
                                                    value="<?php echo e($product->varient[0]->unit); ?>"
                                                    name="unit">
                                                <button class="btn btn-info mb-3" style="background: var(--tp-heading-secondary) !important; border: 1px solid var(--tp-heading-secondary);color:white">Add to
                                                    cart</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
<!-- product-area-end -->
<?php /**PATH E:\live Projects\Glowthentic\Glowthentic-e-commerce\backend\resources\views/frontend/indexContent/all_product.blade.php ENDPATH**/ ?>