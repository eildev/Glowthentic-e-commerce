<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <a href="<?php echo e(route('admin.dashboard')); ?>" class="d-flex">
            <div>
                
            </div>
            <div>
                <h4 class="logo-text">Glowthentic</h4>
            </div>
        </a>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">

        <li>
            <a href="<?php echo e(route('admin.dashboard')); ?>">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Dashboard</div>
            </a>
        </li>

        
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-menu"></i>
                </div>
                <div class="menu-title">Manage Store</div>
            </a>
            <ul class="mm-collapse">
                

                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon">
                            <i class='bx bx-package'></i>
                        </div>
                        <div class="menu-title">Manage Products</div>
                    </a>
                    <ul>
                        <li>
                            <a href="<?php echo e(route('product.view')); ?>"><i class="bx bx-right-arrow-alt"></i>All Products</a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('product')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Product</a>
                        </li>
                        
                        <li>
                            <a href="javascript:;" class="has-arrow">
                                <div class="parent-icon">
                                    <i class='bx bx-purchase-tag-alt'></i>
                                </div>
                                <div class="menu-title">Product Tag</div>
                            </a>
                            <ul>
                                <li> <a href="<?php echo e(route('tagname')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Tag</a>
                                </li>
                                <li> <a href="<?php echo e(route('tagname.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage
                                        Tags</a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <a href="javascript:;" class="has-arrow">
                                <div class="parent-icon">
                                    <i class='bx bx-purchase-tag-alt'></i>
                                </div>
                                <div class="menu-title">Manage Product Promotion</div>
                            </a>
                            <ul>
                                <li> <a href="<?php echo e(route('product.promotion.index')); ?>"><i class="bx bx-right-arrow-alt"></i>Product Promotion</a>
                                </li>

                            </ul>
                        </li>


                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <div class="menu-title">Purchase</div>
                    </a>
                    <ul>

                        <li> <a href="<?php echo e(route('purchase')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Purchase</a>
                        </li>
                        <li> <a href="<?php echo e(route('purchase.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage
                                Purchase</a>
                        </li>
                    </ul>
                </li>

                

                <li>
                    <a class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class='bx bx-category-alt'></i>
                        </div></i>
                        <div class="menu-title">Manage Category</div>
                    </a>
                    <ul class="mm-collapse">
                        <li> <a href="<?php echo e(route('category')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Category</a>
                        </li>
                        <li> <a href="<?php echo e(route('category.view')); ?>"><i class="bx bx-right-arrow-alt"></i>
                                All Category</a>
                        </li>
                    </ul>
                </li>




                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <div class="menu-title">Manage Coupon</div>
                    </a>
                    <ul>

                        <li> <a href="<?php echo e(route('Coupon.index')); ?>"><i class="bx bx-right-arrow-alt"></i>Coupon</a>
                        </li>

                    </ul>
                </li>








                
                <li>
                    <a class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class='bx bx-category-alt'></i>
                        </div></i>
                        <div class="menu-title">Manage
                            Sub-Category</div>
                    </a>
                    <ul class="mm-collapse">
                        <li> <a href="<?php echo e(route('subcategory')); ?>"><i class="bx bx-right-arrow-alt"></i>Add
                                Subcategory</a>
                        </li>
                        <li> <a href="<?php echo e(route('subcategory.view')); ?>"><i class="bx bx-right-arrow-alt"></i>All
                                Subcategory</a>
                        </li>
                        
                        <li>
                            <a class="has-arrow" href="javascript:;">
                                <div class="parent-icon"><i class='bx bx-category-alt'></i>
                                </div></i>
                                <div class="menu-title">Manage Sub
                                    Sub-Category</div>
                            </a>
                            <ul class="mm-collapse">
                                <li> <a href="<?php echo e(route('sub.subcategory')); ?>"><i class="bx bx-right-arrow-alt"></i>Add
                                        Sub-Subcategory</a>
                                </li>
                                <li> <a href="<?php echo e(route('sub.subcategory.view')); ?>"><i
                                            class="bx bx-right-arrow-alt"></i>All
                                        Sub-Subcategory</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon">
                            <i class='bx bx-package'></i>
                        </div>
                        <div class="menu-title">Manage Brands</div>
                    </a>
                    <ul>

                        <li>
                            <a href="<?php echo e(route('brand')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Brand</a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('brand.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage Brand</a>
                        </li>


                    </ul>
                </li>
            </ul>
        </li>

        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon">
                    <i class='bx bx-message-rounded-dots'></i>
                </div>
                <div class="menu-title">Company Details</div>
            </a>
            <ul>

                <li> <a href="<?php echo e(route('company-details')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Company</a>
                </li>
                <li> <a href="<?php echo e(route('company-details.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage
                        Company</a>
                </li>
            </ul>
        </li>
        
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon">
                    <i class="fas fa-bell"></i>
                </div>
                <div class="menu-title">Order <span
                        class="
                    badge bg-primary"><?php echo e($new_orders ?? ''); ?></span></div>
            </a>
            <ul>
                <li>
                    <a href="<?php echo e(route('new.order')); ?>"><i class="bx bx-right-arrow-alt"></i>New Order</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.confirmed')); ?>"><i class="bx bx-right-arrow-alt"></i>Confirmed Order</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.processed')); ?>"><i class="bx bx-right-arrow-alt"></i>Processed Order</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.delivering')); ?>"><i class="bx bx-right-arrow-alt"></i>Delivering
                        Order</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.completed')); ?>"><i class="bx bx-right-arrow-alt"></i>Completed Order</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.refunding')); ?>"><i class="bx bx-right-arrow-alt"></i>Refunding
                        Orders</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.refunded')); ?>"><i class="bx bx-right-arrow-alt"></i>Refunded Orders</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.canceled')); ?>"><i class="bx bx-right-arrow-alt"></i>Canceled Orders</a>
                </li>
                <li>
                    <a href="<?php echo e(route('order.denied')); ?>"><i class="bx bx-right-arrow-alt"></i>Denied Orders</a>
                </li>
            </ul>
        </li>
        <?php if(Auth::user()->email != 'asad@sobrokom.store'): ?>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class='bx bx-message-rounded-dots'></i>
                    </div>
                    <div class="menu-title">Popup Message</div>
                </a>
                <ul>

                    <li> <a href="<?php echo e(route('popupMessage')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Popup
                            Message</a>
                    </li>
                    <li> <a href="<?php echo e(route('popupMessage.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage Popup
                            Message</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class='bx bx-image-alt'></i>
                    </div>
                    <div class="menu-title">Home Banner</div>
                </a>
                <ul>
                    <li> <a href="<?php echo e(route('banner')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Banner</a>
                    </li>
                    <li> <a href="<?php echo e(route('banner.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage Banner</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class='bx bx-image-alt'></i>
                    </div>
                    <div class="menu-title">Offer Banner </div>
                </a>
                <ul>
                    <li> <a href="<?php echo e(route('offerbanner')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Banner</a>
                    </li>
                    <li> <a href="<?php echo e(route('offerbanner.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage
                            Banner</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="menu-title">Subscriber <span
                            class="
                    badge bg-primary"><?php echo e($subscribers ?? ''); ?></span></div>
                </a>
                <ul>
                    <li> <a href="<?php echo e(route('subscribe.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Subscriber
                            list</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="menu-title">Global Coupon</div>
                </a>
                <ul>
                    <li> <a href="<?php echo e(route('global.coupon')); ?>"><i class="bx bx-right-arrow-alt"></i>Add Global
                            Coupon</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="menu-title">Stock Management</div>
                </a>
                <ul>
                    <li>
                        <a href="<?php echo e(route('stock.view')); ?>"><i class="bx bx-right-arrow-alt"></i>View Stock</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a class="has-arrow" href="javascript:;">
                    <div class="parent-icon"><i class="fab fa-blogger"></i>
                    </div>
                    <div class="menu-title">Manage Blog</div>
                </a>
                <ul class="mm-collapse">
                    
                    <li>
                        <a href="javascript:;" class="has-arrow">
                            <div class="parent-icon">
                                <i class="fab fa-slack"></i>
                            </div>
                            <div class="menu-title">Blog Category</div>
                        </a>
                        <ul>
                            <li>
                                <a href="<?php echo e(route('blog.category.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Add
                                    Blog
                                    Category</a>
                            </li>
                            <li>
                                <a href="<?php echo e(route('blog.all.category.view')); ?>"><i
                                        class="bx bx-right-arrow-alt"></i>Manage Blog
                                    Category</a>
                            </li>
                        </ul>
                    </li>

                    
                    <li>
                        <a href="javascript:;" class="has-arrow">
                            <div class="parent-icon">
                                <i class="fas fa-blog"></i>
                            </div>
                            <div class="menu-title">Blog Post</div>
                        </a>
                        <ul>
                            <li>
                                <a href="<?php echo e(route('blog.post.add.view')); ?>"><i class="bx bx-right-arrow-alt"></i>Add
                                    Blog</a>
                            </li>
                            <li>
                                <a href="<?php echo e(route('blog.all.post.view')); ?>"><i
                                        class="bx bx-right-arrow-alt"></i>Manage
                                    Blog</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="javascript:;" class="has-arrow">
                            <div class="parent-icon">
                                <i class="far fa-comment"></i>
                            </div>
                            <div class="menu-title">Blog Comment</div>
                        </a>
                        <ul>
                            <li>
                                <a href="<?php echo e(route('blog.all.pending.comment')); ?>"><i
                                        class="bx bx-right-arrow-alt"></i>Pending
                                    Comment</a>
                            </li>
                            <li>
                                <a href="<?php echo e(route('blog.all.approved.comment')); ?>"><i
                                        class="bx bx-right-arrow-alt"></i>Approve
                                    Comment</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="menu-title">Contact Messages</div>
                </a>
                <ul>
                    <li>
                        <a href="<?php echo e(route('contact-message.show')); ?>"><i class="bx bx-right-arrow-alt"></i>View New
                            Message</a>
                    </li>

                </ul>
            </li>
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="menu-title">User Tracker <span
                            class="
                    badge bg-primary"><?php echo e($visitors ?? ''); ?></span></div>
                </a>
                <ul>
                    <li>
                        <a href="<?php echo e(route('user-tracker.show')); ?>"><i class="bx bx-right-arrow-alt"></i>View Online
                            User</a>
                    </li>

                </ul>
            </li>
            
            <li>
                <a href="javascript:;" class="has-arrow">
                    <div class="parent-icon">
                        <i class='bx bx-user'></i>
                    </div>
                    <div class="menu-title">Users</div>
                </a>
                <ul>
                    <li> <a href="<?php echo e(route('all.users')); ?>"><i class="bx bx-right-arrow-alt"></i>Manage
                            Users</a>
                    </li>
                </ul>
            </li>
        <?php endif; ?>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon">
                    <i class='bx bx-user'></i>
                </div>
                <div class="menu-title">Marketing</div>
            </a>
            <ul>
                <li> <a href="<?php echo e(route('sms.page')); ?>"><i class="bx bx-right-arrow-alt"></i>SMS Marketing</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon">
                    <i class='bx bx-user'></i>
                </div>
                <div class="menu-title">Combo Manage</div>
            </a>
            <ul>
                <li> <a href="<?php echo e(route('combo.index')); ?>"><i class="bx bx-right-arrow-alt"></i>Combo</a>
                </li>
            </ul>
        </li>

        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon">
                    <i class='bx bx-user'></i>
                </div>
                <div class="menu-title">Combo Product Manage</div>
            </a>
            <ul>
                <li> <a href="<?php echo e(route('combo.product.index')); ?>"><i class="bx bx-right-arrow-alt"></i>Combo Product</a>
                </li>
            </ul>
        </li>

    </ul>
    <!--end navigation-->
</div>
<!--end sidebar wrapper -->
<?php /**PATH E:\live Projects\Glowthentic\Glowthentic-e-commerce\backend\resources\views/backend/body/sidebar.blade.php ENDPATH**/ ?>