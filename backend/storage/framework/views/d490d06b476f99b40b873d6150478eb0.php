<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">10+ Order Table</h5>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Date</th>
                                    <th>Invoice no</th>
                                    <th>User Phone Number</th>
                                    <th>Product Qty</th>
                                    <th>Amount</th>
                                    <th>Pay to</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($newOrders->count() > 0): ?>
                                    <?php $__currentLoopData = $newOrders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($order->product_quantity >= '20'): ?>
                                            <?php
                                                $originalDateString = $order->created_at;
                                                $dateTime = new DateTime($originalDateString);
                                                $formattedDate = $dateTime->format('Y-m-d');
                                            ?>
                                            <tr>
                                                <td><?php echo e($serialNumber++); ?></td>
                                                <td><?php echo e($formattedDate); ?></td>
                                                <td><?php echo e($order->invoice_number); ?></td>
                                                <td><?php echo e($order->user_identity ?? ''); ?> <?php if(!empty($order->user_identity)): ?>
                                                        <button data-bs-target="#sms<?php echo e($order->id); ?>"
                                                            data-bs-toggle="modal" class="btn btn-sm btn-success">SMS


                                                        </button>
                                                    <?php endif; ?>
                                                </td>
                                                <td><?php echo e($order->product_quantity); ?></td>
                                                <td><?php echo e($order->grand_total); ?></td>
                                                <td><?php echo e($order->payment_method); ?></td>
                                                <td>
                                                    <span class="text-warning text-capitalize"><?php echo e($order->status); ?></span>
                                                </td>
                                                <td>
                                                    <a href="<?php echo e(route('admin.approve.order', $order->invoice_number)); ?>"
                                                        class="btn btn-sm btn-info">Approve</a>
                                                    <a href="<?php echo e(route('order.details', $order->id)); ?>"
                                                        class="btn btn-sm btn-success">View</a>
                                                    <a href="<?php echo e(route('admin.denied.order', $order->invoice_number)); ?>" class="btn btn-sm btn-danger"
                                                        id="delete">Denied</a>
                                                </td>
                                            </tr>

                                        <?php endif; ?>
                                        <!-- Modal -->
                                        <div class="modal fade" id="sms<?php echo e($order->id); ?>" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Send SMS to User
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <form action="<?php echo e(route('send.sms')); ?>" method="POST">
                                                        <?php echo csrf_field(); ?>
                                                        <div class="modal-body">
                                                            <div class="form-control">
                                                                <label for="sms">Write Message</label>
                                                                <input type="hidden" name="phone"
                                                                    value="<?php echo e($order->user_identity); ?>">
                                                                <textarea name="sms" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn btn-primary">Send
                                                                changes</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr>
                                        <td colspan="10" class="text-center text-warning">Data not Found</td>
                                    </tr>
                                <?php endif; ?>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">New Order Table</h5>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Date</th>
                                    <th>Invoice no</th>
                                    <th>User Phone Number</th>
                                    <th>Product Qty</th>
                                    <th>Amount</th>
                                    <th>Pay to</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($newOrders->count() > 0): ?>
                                    
                                    <?php $__currentLoopData = $newOrders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>


                                        <?php if($order->product_quantity <= '20'): ?>
                                            <?php
                                                $originalDateString = $order->created_at;
                                                $dateTime = new DateTime($originalDateString);
                                                $formattedDate = $dateTime->format('Y-m-d');
                                            ?>
                                            <tr>
                                                <td><?php echo e($serialNumber++); ?></td>
                                                <td><?php echo e($formattedDate); ?></td>
                                                <td><?php echo e($order->invoice_number); ?></td>
                                                <td><?php echo e($order->user_identity); ?></td>
                                                <td><?php echo e($order->product_quantity); ?></td>
                                                <td><?php echo e($order->grand_total); ?></td>
                                                <td><?php echo e($order->payment_method); ?></td>
                                                <td>
                                                    <span class="text-warning text-capitalize"><?php echo e($order->status); ?></span>
                                                </td>
                                                <td>
                                                    <a href="<?php echo e(route('admin.approve.order', $order->invoice_number)); ?>"
                                                        class="btn btn-sm btn-info">Approve</a>
                                                    <a href="<?php echo e(route('order.details', $order->id)); ?>"
                                                        class="btn btn-sm btn-success">View</a>
                                                    <a href="<?php echo e(route('admin.denied.order', $order->invoice_number)); ?>"
                                                        class="btn btn-sm btn-danger" id="delete">Denied</a>
                                                </td>
                                            </tr>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr>
                                        <td colspan="10" class="text-center text-warning">Data not Found</td>
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

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\live Projects\Glowthentic\Glowthentic-e-commerce\backend\resources\views/backend/order/new-order.blade.php ENDPATH**/ ?>