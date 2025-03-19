<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Procesed Order list</h5>

                        <a href="<?php echo e(route('popupMessage')); ?>" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a>
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
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                ?>
                                <?php if($processed_orders->count() > 0): ?>
                                    <?php $__currentLoopData = $processed_orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
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
                                            <td><?php echo e($order->orderBillingDetails->address_1 ?? ''); ?></td>
                                            <td>
                                                <span class="text-warning text-capitalize"><?php echo e($order->status); ?></span>
                                            </td>
                                            <td>
                                                <a href="<?php echo e(route('admin.delivery.order',$order->invoice_number)); ?>" class="btn btn-sm btn-info">Delivery</a>
                                                <a href="<?php echo e(route('order.details', $order->id)); ?>" class="btn btn-sm btn-success">View</a>
                                                <a href="#" class="btn btn-sm btn-danger" id="delete">Cancel</a>
                                            </td>
                                        </tr>
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

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\live Projects\Glowthentic\Glowthentic-e-commerce\backend\resources\views/backend/order/processed-order.blade.php ENDPATH**/ ?>