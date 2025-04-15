<?php $__env->startSection('admin'); ?>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Dashboard</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="<?php echo e(route('admin.dashboard')); ?>"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Product Table</li>
                    </ol>
                </nav>
            </div>


            <div class="ms-auto">
                
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Manage Products</h5>

                        <a href="<?php echo e(route('product')); ?>" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a>
                    </div>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Image</th>
                                    <th>Product name</th>
                                    <th>Category</th>
                                    <th>Sub Category</th>
                                    <th>Brand</th>
                                    <th>Unit</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    $serialNumber = 1;
                                    // dd($products->varient);
                                ?>
                                <?php if($products->count() > 0): ?>
                                    <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                                        <tr>
                                            <td><?php echo e($serialNumber++); ?></td>

                                            <td>
                                                <img src="<?php echo e(asset($product->varient[0]->image)??''); ?>"
                                                    style="height: 50px; object-fit: cover;" class="img-fluid"
                                                    alt="Products Image">
                                            </td>
                                            <td><?php echo e(Illuminate\Support\Str::limit($product->product_name, 29)); ?></td>
                                            <td><?php echo e($product->category->categoryName); ?></td>
                                            <?php
                                                $subcategory=App\models\Category::find($product->subcategory_id);
                                            ?>
                                            <td><?php echo e($subcategory->categoryName ?? ''); ?></td>
                                            <td><?php echo e($product->brand->BrandName); ?></td>
                                            <td><?php echo e($product->unit_id); ?></td>
                                            <td>
                                                ৳<?php echo e($product->varient[0]->regular_price ?? 0); ?>

                                            </td>
                                            <?php
                                                $Total_stock = App\models\ProductStock::where('product_id', $product->id)->sum('StockQuantity')??0;
                                            ?>
                                            
                                            <td>
                                                <?php echo e($Total_stock); ?>

                                            </td>

                                            <td>
                                                <form action="<?php echo e(route('product.status', $product->id)); ?>" method="POST">
                                                    <?php echo csrf_field(); ?>
                                                    <?php if($product->status == 0): ?>
                                                        <button class="btn btn-sm btn-danger status_inactive"
                                                            value="<?php echo e($product->id); ?>">Inactive</button>
                                                    <?php else: ?>
                                                        <button class="btn btn-sm btn-success status_active"
                                                            value="<?php echo e($product->id); ?>">Active</button>
                                                    <?php endif; ?>
                                                </form>
                                            </td>
                                            <td>
                                                <div class="col">
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-info dropdown-toggle" type="button"
                                                            data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                                        <ul class="dropdown-menu" data-popper-placement="bottom-start"
                                                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 40px, 0px);">
                                                            <li><a class="dropdown-item"
                                                                    href="<?php echo e(route('product.view.details', $product->id)); ?>">View
                                                                    Details</a></li>
                                                            <li><a class="dropdown-item"
                                                                    href="<?php echo e(route('product.edit', $product->id)); ?>">Edit</a>
                                                            </li>
                                                            <li><a class="dropdown-item"
                                                                    href="<?php echo e(route('product.delete', $product->id)); ?>"
                                                                    id="delete">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
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



    <script>
        // $(document).ready(function() {
        //     // Status Update
        //     $(document).on('click', '.status_active', function(e) {
        //         e.preventDefault();
        //         // alert("ok");
        //         let id = this.value;


        //         $.ajaxSetup({
        //             headers: {
        //                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //             }
        //         });

        //         $.ajax({
        //             url: '/product/status/' + id,
        //             type: 'POST',
        //             data: {
        //                 'status': 0,
        //             },
        //             contentType: false,
        //             processData: false,
        //             success: function(response) {
        //                 if (response.status == 200) {
        //                     toastr.success(response.message);
        //                     $(this).css('display', 'none');
        //                     $('.status_inactive').css('display', 'block');
        //                 } else {
        //                     toastr.error('status changed unsuccessful');
        //                 }
        //             }
        //         });
        //     })
        // })
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/backend/products/view.blade.php ENDPATH**/ ?>