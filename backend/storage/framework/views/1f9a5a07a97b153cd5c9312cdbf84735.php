<!-- blog-area-start -->
<?php
$home_blog = App\Models\BlogPost::latest()->limit(6)->get()

?>
<section class="blog-area pb-20 pt-50"  style="margin-left: 20px">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 text-center">
                <div class="tpsection mb-15">
                    <h4 class="tpsection__title text-start brand-product-title">Our Latest News</h4>
                </div>
            </div>
            <div class="col-md-6">
                <div class="tpproduct__all-item">
                    <a href="<?php echo e(route('all.blog.post')); ?>">View All <i class="icon-chevron-right"></i></a>
                </div>
            </div>
        </div>
        <div class="swiper-container tpblog-active">
            <div class="row">
                <?php $__currentLoopData = $home_blog; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $blog): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-lg-3 col-md-4 col-xm-12 col-sm-12 p-1">
                    <div class="tpblog__item">
                        <div class="tpblog__thumb fix">
                            <a href="<?php echo e(route('blog.post.details',$blog->id)); ?>"><img src="<?php echo e(asset('uploads/blog/blog_post/'.$blog->image)); ?>" style="height:157px;"
                                    alt=""></a>
                        </div>
                        <div class="tpblog__wrapper">
                            <div class="tpblog__entry-wap">
                                <span class="cat-links"><a href="shop-details.html"><?php echo e($blog['category']['cat_name']); ?></a></span>

                                <span class="author-by"><a href="#">Admin</a></span>

                                <span class="post-data"><a href="#"><?php echo e(Carbon\Carbon::parse($blog->created_at)->diffForHumans()); ?></a></span>
                            </div>
                            <h4 class="tpblog__title"><a href="<?php echo e(route('blog.post.details',$blog->id)); ?>"><?php echo e($blog->title); ?></a></h4>
                        </div>
                    </div>
                </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </div>
</section>
<!-- blog-area-end -->
<?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/frontend/indexContent/blogArea.blade.php ENDPATH**/ ?>