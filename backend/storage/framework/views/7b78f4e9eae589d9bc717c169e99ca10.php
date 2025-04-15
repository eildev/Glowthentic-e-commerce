<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">

                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">All Pending Comment</h5>

                        <a href="<?php echo e(route('blog.all.approved.comment')); ?>" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>User Name </th>
                                    <th>Comments</th>
                                    <th>Blog title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($blogComment->count() > 0): ?>
                                    <?php $__currentLoopData = $blogComment; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $comments): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <?php if($comments->status == 0): ?>
                                        <tr>
                                            <td><?php echo e($serialNumber++); ?></td>
                                            <td><?php echo e($comments['user']['fullName']); ?></td>
                                            <td><?php echo e(Illuminate\Support\Str::limit($comments->comment, 20)); ?>

                                            </td>
                                            <td> <?php echo e($comments['blog']['title']); ?>  </td>
                                            <?php if( $comments->status == 0): ?>
                                            <td> <span class="badge rounded-pill bg-warning">Pending</span> </td>
                                            <?php endif; ?>
                                            <td>
                                                

                                            <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal<?php echo e($comments->id); ?>">
                                                Approve
                                            </button>
                                            <!-- Modal -->
                                            <div class="modal fade" id="exampleModal<?php echo e($comments->id); ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Full Comment</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body" style="overflow:auto">
                                                        <?php echo e($comments->comment); ?>

                                                    </div>
                                                    <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                                    <a href="<?php echo e(route('blog.comment.approve',$comments->id)); ?>" class="btn btn-success btn-sm" title="Approve Comment" >Approve</a>

                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            
                                    <a href="<?php echo e(route('comment.delete',$comments->id)); ?>" class="btn btn-danger btn-sm" title="Delete Comment" id="delete"><i class="fas fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                        <?php else: ?>
                                        <?php endif; ?>
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


    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/backend/blog_comments/pending_comment.blade.php ENDPATH**/ ?>