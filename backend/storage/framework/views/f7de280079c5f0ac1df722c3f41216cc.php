<!-- sidebar-menu-area -->
<div class="tpsideinfo">
    <button class="tpsideinfo__close">Close<i class="fal fa-times ml-10"></i></button>
    <div class="tpsideinfo__search text-center pt-35">
        <span class="tpsideinfo__search-title mb-20">What Are You Looking For?</span>
        <form action="<?php echo e(route('search.product')); ?>" method="get">
            <?php echo csrf_field(); ?>
            <input type="text" name="search" placeholder="Search Products...">
            <button class=""><i class="icon-search"></i></button>
        </form>
    </div>
    <div class="tpsideinfo__nabtab">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                <div class="mobile-menu"></div>
            </div>
        </div>
    </div>
    <div class="tpsideinfo__account-link">
        <?php if(!empty(Auth::user()->id)): ?>
            <a href="<?php echo e(route('login')); ?>"><i class="icon-home icons"></i> Profile</a>
        <?php else: ?>
            <a href="<?php echo e(route('user.dashboard')); ?>"><i class="icon-user icons"></i> Login / Register</a>
        <?php endif; ?>
    </div>

    <?php if(auth()->guard()->check()): ?>
        <div class="tpsideinfo__wishlist-link">
            <a href="<?php echo e(route('user.dashboard')); ?>" target="_parent"><i class="icon-heart"></i> Wishlist</a>
        </div>
    <?php endif; ?>
    <?php if(auth()->guard()->check()): ?>
        <div class="tpsideinfo__account-link">
            <form action="<?php echo e(route('logout')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <button href="#" class="text-white"><i class="fas fa-power-off me-2"></i> log out</button>
            </form>
        </div>
    <?php endif; ?>

</div>
<!-- sidebar-menu-area-end -->
<?php /**PATH C:\Users\Eclipse\Desktop\office task\Glowthentic-e-commerce\backend\resources\views/frontend/body/sidebar.blade.php ENDPATH**/ ?>