<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <div class="row">
            <div class="card border-0 border-top border-3 border-info col-md-8 offset-md-2">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">All Blog Category</h5>

                        <a href="<?php echo e(route('blog.category.view')); ?>" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Blog Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($blogCat->count() > 0): ?>
                                    <?php $__currentLoopData = $blogCat; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $blogCategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td><?php echo e($serialNumber++); ?></td>
                                            <td><?php echo e($blogCategory->cat_name); ?></td>
                                            <td>
                                                <a href="<?php echo e(route('blog.category.edit',$blogCategory->id)); ?>"
                                                    class="btn btn-info btn-sm" title="Edit Data"> <i class="fas fa-edit"></i></a>

                                                <a href="<?php echo e(route('blog.category.delete',$blogCategory->id)); ?>" class="btn btn-danger btn-sm"
                                                    id="delete" title="Delete Data"><i class="fas fa-trash-alt"></i></a>
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

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/backend/blog_category/show.blade.php ENDPATH**/ ?>