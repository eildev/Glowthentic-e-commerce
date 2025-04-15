<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">

                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">All Blog List</h5>

                        <a href="<?php echo e(route('blog.post.add.view')); ?>" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Tags</th>
                                    <th>image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($blogPost->count() > 0): ?>
                                    <?php $__currentLoopData = $blogPost; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $blog): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td><?php echo e($serialNumber++); ?></td>
                                            <td><?php echo e($blog['category']['cat_name']); ?></td>
                                            <td><?php echo e(Illuminate\Support\Str::limit($blog->title, 20)); ?></td>
                                            <td>
                                                <?php
                                                    $text = $blog->desc;
                                                    $strippedText = strip_tags($text, '<br>');
                                                    $trimmedText = mb_substr($strippedText, 0, 30);
                                                    $trimmedTextWithTags = nl2br($trimmedText);
                                                    echo $trimmedTextWithTags;
                                                ?>..
                                                 </td>
                                            <td> <?php echo e($blog->tags); ?>  </td>

                                            <td>
                                                <img src="<?php echo e(asset('/uploads/blog/blog_post/'.$blog->image)); ?>"
                                                    style="height: 50px;width:50px;" class="img-fluid" alt="banner Image">
                                            </td>
                                            <td>
                                                <?php if( $blog->status == 0): ?>
                                                <a href="<?php echo e(route('blog.post.inactive',$blog->id)); ?>"class="btn btn-warning btn-sm" title="Edit Data">Inactive</a>
                                                <?php else: ?>
                                                    <a href="<?php echo e(route('blog.post.active',$blog->id)); ?>"class="btn btn-success btn-sm" title="Edit Data">Active</a>
                                                <?php endif; ?>

                                                <a href="<?php echo e(route('blog.post.edit',$blog->id)); ?>"class="btn btn-info btn-sm" title="Edit Data"><i class="fas fa-edit"></i></a>
                                                <a href="<?php echo e(route('blog.post.delete',$blog->id)); ?>" class="btn btn-danger btn-sm" title="Delete Data" id="delete"><i class="fas fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr>
                                        <td colspan="6" class="text-center text-warning">Data not Found</td>
                                    </tr>
                                <?php endif; ?>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/backend/blog_post/show.blade.php ENDPATH**/ ?>