<div class="tpshop__top ml-60">
    <div class="product__filter-content mb-40">
        <div class="row align-items-center my-3">
            <div class="col-12">
                <div class="d-flex align-items-center justify-content-center">
                    
                    <strong>Order History</strong>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="tab_card mb-20">
                <div class="table-content table-responsive">
                    <table class="table">

                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Invoice Number</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                $serialNumber = 1;
                            ?>
                            <?php if($orders->count() > 0): ?>
                                <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($serialNumber++); ?></td>
                                        <td><?php echo e($order->invoice_number); ?></td>
                                        <td><?php echo e($order->product_quantity); ?></td>
                                        <td><?php echo e($order->grand_total); ?></td>
                                        <td>
                                        <?php if($order->status == 'refunding'): ?>
                                            <?php echo e('Refund Processing'); ?>

                                        <?php elseif($order->status == 'refunded'): ?>
                                            <?php echo e('Refund Completed'); ?>

                                        <?php endif; ?>

                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php else: ?>
                                <tr>
                                    <td colspan="7" class="text-center text-warning">Data not Found</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>

</div>
<?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/frontend/userprofile/tabs/refunds.blade.php ENDPATH**/ ?>