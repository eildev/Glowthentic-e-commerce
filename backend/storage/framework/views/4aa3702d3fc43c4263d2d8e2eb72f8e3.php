<?php $__env->startSection('maincontent'); ?>
    <!-- slider-area-start -->
    <?php echo $__env->make('frontend.indexContent.slider', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- slider-area-end -->

    <!-- feature-area-start -->
    
    <!-- feature-area-end -->

    <!-- product-area-start -->
    <!--include('frontend.indexContent.productArea_1')-->
    <!-- product-area-end -->

    <!-- banner-area-start -->
    <!--include('frontend.indexContent.banner')-->
    <!-- banner-area-end -->

    <!-- product-area-start -->
    <!--include('frontend.indexContent.productArea_2')-->
    <!-- product-area-end -->

    <!--hot-contact-area-start -->
    <!--include('frontend.indexContent.hot-contact')-->
    <!-- hot-contact-area-end -->

    <!-- product-area-start -->
    <!--include('frontend.indexContent.productArea_3')-->
    <!-- product-area-end -->

    <!-- banner-area-start -->
    <!--include('frontend.indexContent.banner2')-->
    <!-- banner-area-end -->

    <!-- brand-product-area-start -->
    <!--include('frontend.indexContent.brandProduct')-->
    <!-- brand-product-area-end -->
    
    <!-- Category-area-start -->
    <?php echo $__env->make('frontend.indexContent.cartArea', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- cart-area-end -->
    
     <!-- All-product-area-start -->
    <?php echo $__env->make('frontend.indexContent.all_product', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- brand-product-area-end -->

    

    <!-- blog-area-start -->
    <?php echo $__env->make('frontend.indexContent.blogArea', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <!-- blog-area-end -->
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/frontend/index.blade.php ENDPATH**/ ?>