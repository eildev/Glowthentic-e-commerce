<?php $__env->startSection('admin'); ?>
<link href="<?php echo e(asset('backend')); ?>/assets/plugins/select2/css/select2.min.css" rel="stylesheet" />
<link href="<?php echo e(asset('backend')); ?>/assets/plugins/select2/css/select2-bootstrap4.css" rel="stylesheet" />
    <div class="page-content">
        <div class="row">
            <div class="card">
                <div class="card-body p-4">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Add Product</h5>

                        <div class="d-flex items-center">
                            <div class="my-3 me-2">
                                <a href="<?php echo e(route('product.view')); ?>" class="btn btn-danger">
                                    <i class='bx bx-show'></i>
                                    View All Product</a>
                            </div>
                            <div class="my-3">
                                <a href="<?php echo e(route('product')); ?>" class="btn btn-success">
                                    <i class="fas fa-plus"></i>
                                    Add New Product</a>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div class="form-body mt-4">
                        <form method="POST" action="" enctype="multipart/form-data" id="productForm">
                            <?php echo csrf_field(); ?>
                            <div class="row g-3 mb-3">
                                <div class="col-lg-8">
                                    <div class="border border-3 p-4 rounded">
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <?php
                                                    $categories = App\Models\Category::whereNull('parent_id')->get();
                                                ?>
                                                <div class="row">
                                                    <label class="form-label col-12">Select Category</label>
                                                    <div class="col-12">
                                                        <select class="form-select category_select <?php $__errorArgs = ['category_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="category_id">
                                                            <option value="">Select Category</option>
                                                            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                <option value="<?php echo e($category->id); ?>">
                                                                    <?php echo e($category->categoryName); ?>

                                                                </option>
                                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                        </select>
                                                        <?php $__errorArgs = ['category_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <label class="form-label col-12">Select Subcategory</label>
                                                    <div class="col-12">
                                                        <select class="form-select subcategory_select <?php $__errorArgs = ['subcategory_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="subcategory_id">
                                                            <option value="">Select Subcategory</option>
                                                        </select>
                                                        <?php $__errorArgs = ['category_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                
                                                <div class="row">
                                                    <label class="form-label col-12">Select Sub-Subcategory</label>
                                                    <div class="col-12">
                                                        <select class="form-select" name="sub_subcategory_id">
                                                            <option value="">Select Sub-Subcategory</option>
                                                            
                                                        </select>
                                                        <span class="sub_subcategory_id text-danger"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <?php
                                                    $brands = App\Models\Brand::all();
                                                ?>
                                                <div class="row">
                                                    <label class="form-label col-12">Select Brand</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['brand_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="brand_id">
                                                            <option value="">Select Brand</option>
                                                            <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                <option value="<?php echo e($brand->id); ?>">
                                                                    <?php echo e($brand->BrandName); ?>

                                                                </option>
                                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                        </select>
                                                        <?php $__errorArgs = ['brand_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                        <div class="row mb-3">

                                            <div class="col-md-6">


                                                <div class="row">
                                                    <label class="form-label col-12">Select Unit</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['unit_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="unit_id">
                                                            <option value="">Select Unit</option>
                                                                <option value="pcs">Piece</option>
                                                                <option value="set">Set</option>
                                                                <option value="pair">Pair</option>
                                                                <option value="dozen">Dozen</option>
                                                                <option value="kg">Kilogram (kg)</option>
                                                                <option value="g">Gram (g)</option>
                                                                <option value="mg">Milligram (mg)</option>
                                                                <option value="lb">Pound (lb)</option>
                                                                <option value="oz">Ounce (oz)</option>
                                                                <option value="l">Liter (L)</option>
                                                                <option value="ml">Milliliter (ml)</option>
                                                                <option value="fl_oz">Fluid Ounce (fl oz)</option>
                                                                <option value="gal">Gallon (gal)</option>
                                                                <option value="m">Meter (m)</option>
                                                                <option value="cm">Centimeter (cm)</option>
                                                                <option value="inch">Inch (in)</option>
                                                                <option value="ft">Foot (ft)</option>
                                                                <option value="yd">Yard (yd)</option>
                                                                <option value="pack">Pack</option>
                                                                <option value="box">Box</option>
                                                        </select>
                                                        <?php $__errorArgs = ['unit_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-md-6">

                                                <div class="row">
                                                    <label class="form-label col-12">Select Size</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['size'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="size">
                                                            <option value="">Select Size</option>
                                                            <option value="s">Small (S)</option>
                                                            <option value="m">Medium (M)</option>
                                                            <option value="l">Large (L)</option>
                                                            <option value="xl">X-Large (XL)</option>
                                                            <option value="xxl">XX-Large (XXL)</option>
                                                            <option value="6">Size 6</option>
                                                            <option value="7">Size 7</option>
                                                            <option value="8">Size 8</option>
                                                            <option value="9">Size 9</option>
                                                            <option value="10">Size 10</option>
                                                            <option value="500g">500g</option>
                                                            <option value="1kg">1kg</option>
                                                            <option value="500ml">500ml</option>
                                                            <option value="1l">1L</option>
                                                        </select>
                                                        <?php $__errorArgs = ['size'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                        <div class="row mb-3">

                                            <div class="col-md-6">

                                                <div class="row">
                                                    <label class="form-label col-12">Select Color</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['color'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="color">
                                                            <option value="">Select Color</option>
                                                            <option value="black">Black</option>
                                                            <option value="white">White</option>
                                                            <option value="red">Red</option>
                                                            <option value="blue">Blue</option>
                                                            <option value="green">Green</option>
                                                            <option value="yellow">Yellow</option>
                                                            <option value="orange">Orange</option>
                                                            <option value="purple">Purple</option>
                                                            <option value="pink">Pink</option>
                                                            <option value="brown">Brown</option>
                                                            <option value="gray">Gray</option>
                                                            <option value="silver">Silver</option>
                                                            <option value="gold">Gold</option>
                                                            <option value="navy">Navy</option>
                                                            <option value="maroon">Maroon</option>
                                                            <option value="beige">Beige</option>
                                                            <option value="teal">Teal</option>
                                                            <option value="cyan">Cyan</option>
                                                            <option value="magenta">Magenta</option>
                                                            <option value="olive">Olive</option>
                                                            <option value="violet">Violet</option>
                                                            <option value="indigo">Indigo</option>
                                                            <option value="turquoise">Turquoise</option>
                                                            <option value="charcoal">Charcoal</option>

                                                        </select>
                                                        <?php $__errorArgs = ['color'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-md-6">

                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Product Weight</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="text" name="weight"
                                                            class="form-control <?php $__errorArgs = ['weight'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="inputEnterYourName"
                                                            placeholder="Enter Product Weight">
                                                         <?php $__errorArgs = ['weight'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>






                                        <div class="row mb-3">

                                            <div class="col-md-6">

                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Flavor</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="text" name="flavor"
                                                            class="form-control <?php $__errorArgs = ['flavor'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="inputEnterYourName"
                                                            placeholder="Enter Product flavor">
                                                         <?php $__errorArgs = ['flavor'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-md-6">

                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Product Price</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="text" name="price"
                                                            class="form-control <?php $__errorArgs = ['price'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="inputEnterYourName"
                                                            placeholder="Enter Product Weight">
                                                         <?php $__errorArgs = ['price'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <div class="row mb-3">

                                            <div class="col-md-6">

                                                <div class="row">
                                                    <label class="form-label col-12">Select Gender</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['gender'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="gender">
                                                            <option value="">Select Gender</option>
                                                            <option value="unisex">Unisex</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>

                                                        </select>
                                                        <?php $__errorArgs = ['gender'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>




                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Product Name</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="text" name="product_name"
                                                            class="form-control product_sku <?php $__errorArgs = ['product_name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="inputEnterYourName"
                                                            placeholder="Enter Product Name">
                                                         <?php $__errorArgs = ['product_name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label"> Description</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea class="form-control  product_descriptions <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="description" placeholder="Enter Product Description" style="resize: none; height: 70px;"></textarea>
                                                         <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Ingredients</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea class="form-control product_descriptions" name="ingredients" placeholder="Enter Ingredients"
                                                            style="resize: none; height: 100px;" id="product_description"></textarea>


                                                            <?php $__errorArgs = ['ingredients'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="" class="form-label">Usage Instruction</label>
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea class="form-control product_descriptions" name="usage_instruction" placeholder="Enter Usage Instruction"
                                                            style="resize: none; height: 100px;" id=""></textarea>


                                                            <?php $__errorArgs = ['usage_instruction'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>










                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="border border-3 p-4 rounded">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">SKU</label>
                                                    <input type="text" class="form-control sku_generate <?php $__errorArgs = ['sku'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                        placeholder="ASD1202" name="sku">
                                                    <?php $__errorArgs = ['sku'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                        <span class="text-danger"><?php echo e($message); ?></span>
                                                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                </div>
                                            </div>



                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label"> Stock Quantity</label>
                                                    <input type="text" class="form-control  <?php $__errorArgs = ['stock_quantity'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                        placeholder="Enter Stock Quantity" name="stock_quantity">
                                                    <?php $__errorArgs = ['stock_quantity'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                        <span class="text-danger"><?php echo e($message); ?></span>
                                                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                </div>
                                            </div>







                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label col-12">Select Feature</label>
                                                    <div class="col-12">
                                                        <select class="form-select <?php $__errorArgs = ['product_feature'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="multiple-select-field"
                                                            name="product_feature[]" data-placeholder="Choose anything"
                                                            multiple>
                                                            <option value="feature">Feature</option>
                                                            <option value="new-arrival">New Arrival</option>
                                                            <option value="trending">Trending</option>
                                                            <option value="best-rate">Best Rate</option>
                                                            <option value="weekend-deals">Weekend Deals</option>
                                                            <option value="top-seller">Top Seller</option>
                                                            <option value="top-offers">Top Offers</option>
                                                        </select>
                                                         <?php $__errorArgs = ['product_feature'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                            <span class="text-danger"><?php echo e($message); ?></span>
                                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                    </div>
                                                </div>
                                            </div>




                                            <?php
                                              $tag=App\Models\TagName::all();
                                            ?>

                                            <div class="mb-3">
                                                <label class="form-label">Select Product Tag</label>
                                                <select class="multiple-select" data-placeholder="Choose anything" multiple="multiple" name="tag[]">
                                                    
                                                    <?php $__currentLoopData = $tag; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                       <option value="<?php echo e($tag->id); ?>"><?php echo e($tag->tagName); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                                                </select>
                                            </div>











                                      

                                            <div class="row mb-3 d-flex align-items-center">
                                                <div class="col-md-6">
                                                    <label for="image" class="form-label">Product Thumbnail</label>
                                                    <input type="file" id="image" class="form-control  <?php $__errorArgs = ['product_main_image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                        name="product_main_image">
                                                    <div class="my-1"><i><b>Note:</b> Please provide 600 X 600 size
                                                            image</i></div>
                                                     <?php $__errorArgs = ['product_main_image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                        <span class="text-danger"><?php echo e($message); ?></span>
                                                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                                </div>
                                                <div class="col-md-6">
                                                    <img id="showImage" class=""
                                                        style="height:'150'; width: 200px; object-fit: contain;"
                                                        src="<?php echo e(asset('uploads/productempty.jpg')); ?>" alt="Product Image">
                                                </div>

                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <a type="" class="btn btn-primary add_product">Add
                                                        Product</a>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <a  class="btn btn-primary add_variant">Add
                                                        Variant</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>




                        <div class="row" style="display: none;" id="variant_form">

                        </div>







                        
                    </div>

                </div>

                <!--end row-->
            </div>
        </div>
    </div>



    <script>

        // sku Generator
        function generateProductSKU(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let sku = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                sku += characters.charAt(randomIndex);
            }
            return sku;
        }
        document.querySelector(".product_sku").addEventListener('blur', function() {
            const skuGenerate = document.querySelector(".sku_generate");
            const productNameValue = this.value;
            //  console.log(productNameValue);

            if (productNameValue.trim() !== '') {
                skuGenerate.value = generateProductSKU(10);
            }
        })











    $(document).on("click", ".addRow", function () {
        let row = `<tr>
                <td></td>
            <td><input type="number" class="form-control" name="price[]"></td>
            <td>  <select class="form-select <?php $__errorArgs = ['size'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="size[]">
                                                <option value="">Select Size</option>
                                                <option value="s">Small (S)</option>
                                                <option value="m">Medium (M)</option>
                                                <option value="l">Large (L)</option>
                                                <option value="xl">X-Large (XL)</option>
                                                <option value="xxl">XX-Large (XXL)</option>
                                                <option value="6">Size 6</option>
                                                <option value="7">Size 7</option>
                                                <option value="8">Size 8</option>
                                                <option value="9">Size 9</option>
                                                <option value="10">Size 10</option>
                                                <option value="500g">500g</option>
                                                <option value="1kg">1kg</option>
                                                <option value="500ml">500ml</option>
                                                <option value="1l">1L</option>
                                            </select></td>
                     <td><select class="form-select <?php $__errorArgs = ['color'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid  <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="color[]">
                                                <option value="">Select Color</option>
                                                <option value="black">Black</option>
                                                <option value="white">White</option>
                                                <option value="red">Red</option>
                                                <option value="blue">Blue</option>
                                                <option value="green">Green</option>
                                                <option value="yellow">Yellow</option>
                                                <option value="orange">Orange</option>
                                                <option value="purple">Purple</option>
                                                <option value="pink">Pink</option>
                                                <option value="brown">Brown</option>
                                                <option value="gray">Gray</option>
                                                <option value="silver">Silver</option>
                                                <option value="gold">Gold</option>
                                                <option value="navy">Navy</option>
                                                <option value="maroon">Maroon</option>
                                                <option value="beige">Beige</option>
                                                <option value="teal">Teal</option>
                                                <option value="cyan">Cyan</option>
                                                <option value="magenta">Magenta</option>
                                                <option value="olive">Olive</option>
                                                <option value="violet">Violet</option>
                                                <option value="indigo">Indigo</option>
                                                <option value="turquoise">Turquoise</option>
                                                <option value="charcoal">Charcoal</option>

                                            </select>
                </td>
            <td><input type="text" class="form-control" name="weight[]"></td>
            <td><input type="text" class="form-control" name="flavor[]"></td>
            <td><input type="file" class="form-control" name="image[]"></td>
            <td><input type="number" class="form-control" name="stock_quantity[]"></td>
            <td>
                <button type="button" class="btn btn-danger removeRow">✖</button>
            </td>
        </tr>`;
        $("#productTableBody").append(row);
    });

    $(document).on("click", ".removeRow", function () {
        $(this).closest("tr").remove();
    });



    $(document).on("click", ".add_variant", function(){

        $('#variant_form').fadeIn(1000);
        this.disabled = true;
        this.innerText = "Variant Added";
        $.ajax({
            url:'/product/get_variant_data',
            type:'Get',
            success:function(res){
              $('#variant_form').append(
                `
                    <form id="variant_form_submit">
                           <div class="col-md-12 col-sm-12">
                             <h5 class="mb-3 fw-bold  text-primary border-bottom pb-2">Variation Product Name:  ${res.product_name}</h5>

                               <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Price</th>
                                            <th>Size</th>
                                            <th>Color</th>
                                            <th>Weight</th>
                                            <th>Flavor</th>
                                            <th>Image</th>
                                            <th>Stock</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="productTableBody">
                                        <tr>
                                            <td><input type="hidden" name="product_id" value="${res.product_id}"></td>
                                            <td><input type="number" class="form-control" name="price[]"></td>
                                            <td>
                                                <select class="form-select <?php $__errorArgs = ['size'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="size[]">
                                                    <option value="">Select Size</option>
                                                    <option value="s">Small (S)</option>
                                                    <option value="m">Medium (M)</option>
                                                    <option value="l">Large (L)</option>
                                                    <option value="xl">X-Large (XL)</option>
                                                    <option value="xxl">XX-Large (XXL)</option>
                                                    <option value="6">Size 6</option>
                                                    <option value="7">Size 7</option>
                                                    <option value="8">Size 8</option>
                                                    <option value="9">Size 9</option>
                                                    <option value="10">Size 10</option>
                                                    <option value="500g">500g</option>
                                                    <option value="1kg">1kg</option>
                                                    <option value="500ml">500ml</option>
                                                    <option value="1l">1L</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select class="form-select <?php $__errorArgs = ['color'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="color[]">
                                                    <option value="">Select Color</option>
                                                    <option value="black">Black</option>
                                                    <option value="white">White</option>
                                                    <option value="red">Red</option>
                                                    <option value="blue">Blue</option>
                                                    <option value="green">Green</option>
                                                    <option value="yellow">Yellow</option>
                                                    <option value="orange">Orange</option>
                                                    <option value="purple">Purple</option>
                                                    <option value="pink">Pink</option>
                                                    <option value="brown">Brown</option>
                                                    <option value="gray">Gray</option>
                                                    <option value="silver">Silver</option>
                                                    <option value="gold">Gold</option>
                                                    <option value="navy">Navy</option>
                                                    <option value="maroon">Maroon</option>
                                                    <option value="beige">Beige</option>
                                                    <option value="teal">Teal</option>
                                                    <option value="cyan">Cyan</option>
                                                    <option value="magenta">Magenta</option>
                                                    <option value="olive">Olive</option>
                                                    <option value="violet">Violet</option>
                                                    <option value="indigo">Indigo</option>
                                                    <option value="turquoise">Turquoise</option>
                                                    <option value="charcoal">Charcoal</option>
                                                </select>
                                            </td>
                                            <td><input type="text" class="form-control" name="weight[]"></td>
                                            <td><input type="text" class="form-control" name="flavor[]"></td>
                                            <td><input type="file" class="form-control" name="image[]"></td>
                                            <td><input type="number" class="form-control" name="stock_quantity[]"></td>
                                            <td>
                                                <button type="button" class="btn btn-success addRow">+</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="9" class="text-end">
                                                <button type="submit" class="btn btn-primary variant_save">Save</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            </div>
                            </form>
                `
              )
            }
        });
    })




            $(document).on("click", ".add_product", function () {
            let formdata = new FormData($('#productForm')[0]); // Corrected FormData
            $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                    $.ajax({
                        type: "POST",
                        url: "/product/store",
                        data: formdata,
                        contentType: false,
                        processData: false,
                        success:function(res){
                            if(res.status == 200){
                            toastr.success(res.message);
                            }



                        },
                        error: function (xhr) {
                                if (xhr.status === 422) {
                                    let errors = xhr.responseJSON.errors;
                                    $('.error-message').remove(); // Remove previous errors

                                    $.each(errors, function (key, value) {
                                        let inputField = $('[name="' + key + '"]');
                                        inputField.after('<div class="text-danger error-message">' + value[0] + '</div>');
                                    });
                                }
                            }
                    })
            });


  $(document).on("click",".variant_save",function(e){
    e.preventDefault();

    let formdata = new FormData($('#variant_form_submit')[0]);

    $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({

                url:"/product/variant/store",
                type:"POST",
                data:formdata,
                contentType: false,
                processData:false,
                success:function(res){

                    console.log(res);
                    toastr.success(res.message);
                    $('#variant_form_submit')[0].reset();
                    location.reload();
                }

            });
  })




















        // !.. add product ajax Crud
        // const add_product = document.querySelector('.add_product');
        // add_product.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     document
        //         .querySelector(".pageLoader")
        //         .style.setProperty("display", "flex", "important");

        //     let allData = new FormData(jQuery("#productForm")[0]);
        //     $.ajax({
        //         url: "/product/store",
        //         type: "POST",
        //         data: allData,
        //         contentType: false,
        //         processData: false,
        //         success: function(res) {
        //             if (res.status == 200) {
        //                 $('.variant_section').show();
        //                 $('.add_product').addClass('disabled');
        //                 $('.product_id').val(res.productId);
        //                 toastr.success(res.message);
        //                 document
        //                     .querySelector(".pageLoader")
        //                     .style.setProperty("display", "none", "important");
        //             } else {
        //                 $('.category_error').text(res.error.category_id);
        //                 $('.subcategory_error').text(res.error.subcategory_id);
        //                 $('.brand_error').text(res.error.brand_id);
        //                 $('.feature_error').text(res.error.product_feature);
        //                 $('.product_name_error').text(res.error.product_name);
        //                 $('.short_desc').text(res.error.short_desc);
        //                 $('.long_desc').text(res.error.long_desc);
        //                 $('.product_image').text(res.error.product_image);
        //                 $('.sku_error').text(res.error.sku);
        //                 $('.shipping_error').text(res.error.shipping);
        //                 // $('.tag_error').text(res.error.tags);
        //                 toastr.warning(res.error);
        //                 document
        //                     .querySelector(".pageLoader")
        //                     .style.setProperty("display", "none", "important");
        //             }
        //         },
        //     });
        // });



        // // !.. add variant ajax Crud
        // const add_varient = document.querySelector('.add_varient');
        // add_varient.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     document
        //         .querySelector(".pageLoader")
        //         .style.setProperty("display", "flex", "important");
        //     let regular_price = parseFloat(document.querySelector('.regular_price').value);
        //     let discount = parseFloat(document.querySelector('.discount').value);
        //     let discount_amount = parseFloat(document.querySelector('.discount_amount')
        //         .value);
        //     let stock = parseFloat(document.querySelector('#stock').value);

        //     let varientData = new FormData(jQuery("#productVariant")[0]);
        //     if (regular_price > 0 && discount >= 0 && discount_amount > 0 && stock > 0) {
        //         $.ajax({
        //             url: '/product/variant/store',
        //             type: "POST",
        //             data: varientData,
        //             contentType: false,
        //             processData: false,
        //             success: function(response) {
        //                 if (response.status == 200) {
        //                     toastr.success(response.message);
        //                     document.querySelector('.discount_amount')
        //                         .value = '';
        //                     document.querySelector('.regular_price').value = '';
        //                     document.querySelector('.discount').value = '';
        //                     document.querySelector('#stock').value = '';
        //                     document.querySelector('.unit').value = '';
        //                     document.querySelector('.weight').value = '';
        //                     document.querySelector('.color').value = '';
        //                     document.querySelector('.size').value = '';
        //                     show();
        //                     document
        //                         .querySelector(".pageLoader")
        //                         .style.setProperty("display", "none", "important");
        //                 } else {
        //                     toastr.error('Something went wrong');
        //                     document
        //                         .querySelector(".pageLoader")
        //                         .style.setProperty("display", "none", "important");
        //                 }
        //             }
        //         })

        //         document
        //             .querySelector(".pageLoader")
        //             .style.setProperty("display", "none", "important");
        //     } else {
        //         toastr.error('please provide valid input');
        //         document
        //             .querySelector(".pageLoader")
        //             .style.setProperty("display", "none", "important");
        //     }

        // })


        // // show variantData on Table
        // function show() {
        //     const productId = document.querySelector('.product_id').value;
        //     $.ajax({
        //         url: '/product/variant/show/' + productId,
        //         type: "GET",
        //         dataType: 'JSON',
        //         success: function(res) {
        //             if (res.status == 200) {
        //                 // console.log(res);
        //                 let varient_container = document.querySelector('.varient_container');
        //                 varient_container.innerHTML = "";
        //                 const allData = res.variantData;
        //                 allData.forEach(function(data) {
        //                     const tr = document.createElement('tr');
        //                     tr.innerHTML += `
    //                         <td>${data.regular_price}</td>
    //                         <td>${data.discount}</td>
    //                         <td>${data.discount_amount}</td>
    //                         <td>${data.stock_quantity}</td>
    //                         <td>${data.unit}</td>
    //                         <td>${data.weight}</td>
    //                         <td>${data.color}</td>
    //                         <td>${data.size}</td>
    //                         <td>${data.manufacture_date}</td>
    //                         <td>${data.expire_date}</td>
    //                         <td>
    //                         <button class="btn btn-sm btn-info edit_variant me-2" value="${data.id}">
    //                             Edit
    //                         </button>
    //                         <button value="${data.id}" class="btn-sm btn-danger btn delete_variant">Delete</button>
    //                                     </td>
    //                             `;
        //                     varient_container.appendChild(tr);
        //                 })
        //             } else {
        //                 toastr.warning(res.error);
        //             }
        //         }
        //     })
        // }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\fardus-hassan\project_1\Glowthentic-e-commerce\backend\resources\views/backend/products/insert.blade.php ENDPATH**/ ?>