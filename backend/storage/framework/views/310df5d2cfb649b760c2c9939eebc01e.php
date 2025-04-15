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
                                <th>Download Invoice</th>
                                <th>Refunds</th>
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
                                        <?php if($order->status == 'pending'): ?>
                                            <?php echo e('Order Pending'); ?>

                                        <?php elseif($order->status == 'approve'): ?>
                                            <?php echo e('Order Processing'); ?>

                                        <?php elseif($order->status == 'processing'): ?>
                                            <?php echo e('Order Processing'); ?>

                                        <?php elseif($order->status == 'delivering'): ?>
                                            <?php echo e('Order Delivering'); ?>

                                        <?php elseif($order->status == 'completed'): ?>
                                            <?php echo e('Order Completed'); ?>

                                        <?php endif; ?>

                                        </td>
                                        <td> </td>
                                        <?php if($order->status == 'completed'): ?>
                                            <td><a href="<?php echo e(route('user.refund.order',$order->invoice_number)); ?>" class="btn btn-info btn-sm">Refund </a></td>

                                        <?php else: ?>
                                            <td><a href="<?php echo e(route('user.cancel.order',$order->invoice_number)); ?>" class="btn btn-danger btn-sm" id="order_cancel">Cancel</a></td>
                                        <?php endif; ?>

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


<script>
            $(document).ready(function() {
            //    delete function
            $(document).on('click', '#order_cancel', function(e) {
                e.preventDefault();

                var link = $(this).attr("href");

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to cancel this order!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = link
                        Swal.fire(
                            'Deleted!',
                            'Your Order has been canceld.',
                            'success'
                        )
                    }
                })

            });
        });
</script>
<?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/frontend/userprofile/tabs/orders.blade.php ENDPATH**/ ?>