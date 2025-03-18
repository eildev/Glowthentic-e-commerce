<!-- header-search -->
<?php echo $__env->make('frontend.body.headerSearch', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<!-- header-search-end -->

<!-- header-cart-start -->
<?php echo $__env->make('frontend.body.cartArea', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<!-- header-cart-end -->

<!-- mobile-menu-area -->
<?php echo $__env->make('frontend.body.tabMenu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<!-- mobile-menu-area-end -->

<!-- sidebar-menu-area -->
<?php echo $__env->make('frontend.body.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<script>
    let items = document.querySelectorAll('.sub_cat a').forEach((item)=>{
        item.addEventListener("mouseover",()=>{
            let submenuUl = item.nextElementSibling;
            if(submenuUl.style.display == "block"){
                submenuUl.style.display = "none";
            }else{
                submenuUl.style.display = "block";
            }
        })
    })
    $(document).on("mouseleave",'.subsubmenuUl', function(){
        $('.subsubmenuUl').css({'display':"none"});
    });
    $(document).ready(function() {
        $('#sub_cat li').each(function() {
            if ($(this).find('ul li').length > 0) {
                $(this).prepend("+");
            }
        });
    })
</script>
<!-- sidebar-menu-area-end -->
<?php /**PATH C:\Users\Eclipse\Desktop\office task\Glowthentic-e-commerce\backend\resources\views/frontend/body/mainnav.blade.php ENDPATH**/ ?>