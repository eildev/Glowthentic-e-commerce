@extends('backend.master')
@section('admin')
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-8 offset-md-2">

                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Manage Category</h5>

                        {{-- <a href="{{ route('category') }}" class="btn btn-info btn-sm text-light ">
                            <i class='bx bx-plus'></i>
                        </a> --}}

                        <a href="#" class="btn btn-info btn-sm text-light get_product_and_combo" data-bs-toggle="modal"
                        data-bs-target="#comboProductAddModal">
                        <i class='bx bx-plus'></i>
                    </a>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="order_table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Product Name</th>
                                    <th>Combo Name</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="comboProductTable">

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>


    <div class="modal fade" id="comboProductAddModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Combo Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="ComboProductAddForm" enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <hr>
                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Product Name</label>
                                    <div class="col-sm-9">
                                        <select name="product_id" class="form-select products" required>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Combo Name</label>
                                    <div class="col-sm-9">
                                        <select name="combo_id" class="form-select combos" required>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Quantity</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="quantity" class="form-control" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary save_combo_product">Save changes</button>
                </div>
            </div>
        </div>
    </div>









    <div class="modal fade" id="comboProductEditModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Combo Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="ComboProductEditForm" enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <hr>
                                <div class="row mb-3">
                                    <input type="hidden" class="comboProduct_id" name="comboProduct_id" required>
                                    <label class="col-sm-3 col-form-label">Product Name</label>
                                    <div class="col-sm-9">
                                        <select name="product_id" class="form-select products" required>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Combo Name</label>
                                    <div class="col-sm-9">
                                        <select name="combo_id" class="form-select combos" required>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Quantity</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="quantity" class="form-control quantity" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary Edit_comboProduct">Update</button>
                </div>
            </div>
        </div>
    </div>






    <script>

   $(document).on("click",".get_product_and_combo",function(){

      $.ajax({
         url:'/get/product/and/combo',
         type:'GET',
         success:function(response){
            let products = response.product;
            let combos = response.combo;
             let productOption =`<option selected disabled>Choose...</option>`;
             let comboOption =`<option selected disabled>Choose...</option>`;
            products.forEach(products=>{
                productOption += `<option value="${products.id}">${products.product_name}</option>`;
            });

            combos.forEach(combos=>{
                comboOption += `<option value="${combos.id}">${combos.name}</option>`;
            });


            $('.products').html(productOption);
            $('.combos').html(comboOption);
         }
      });

   });



   $(document).on('click', '.save_combo_product', function() {
    // e.preventDefault();

    let formData = new FormData($('#ComboProductAddForm')[0]);

    $.ajax({
        url: '/combo/product/store',
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        dataType: "json",
        beforeSend: function() {
            $('.error-message').remove();
        },
        success: function(response) {
            if (response.status === 200) {

                $('#ComboProductAddForm')[0].reset();
                $('#comboProductAddModal').modal('hide');
                showComboProduct();
                toastr.success(response.message);
            }
        },
        error: function(xhr) {
            if (xhr.status === 422) {
                let errors = xhr.responseJSON.errors;
                $.each(errors, function(key, value) {
                    let inputField = $('[name="' + key + '"]');
                    inputField.after('<span class="text-danger error-message">' + value[0] + '</span>');
                });
            } else {
                alert("Something went wrong!");
            }
        }
    });
});


$(document).on('click','.edit',function(){

    let id = $(this).data('id');

     $.ajax({
        url:'/combo/product/edit/'+id,
        type:'GET',
        success:function(response){
            if(response.status === 200){

             $('.quantity').val(response.comboProduct.quantity);
             $('.comboProduct_id').val(response.comboProduct.id);
             let products = response.product;
            let combos = response.combo;
             let productOption =`<option selected disabled>Choose...</option>`;
             let comboOption =`<option selected disabled>Choose...</option>`;
             products.forEach(product => {
                productOption += `<option value="${product.id}" ${product.id === response.comboProduct.product_id ? 'selected' : ''}>${product.product_name}</option>`;
            });


            combos.forEach(combo => {
                comboOption += `<option value="${combo.id}" ${combo.id === response.comboProduct.combo_id ? 'selected' : ''}>${combo.name}</option>`;
            });

            $('.products').html(productOption);
            $('.combos').html(comboOption);

            }
        }
     });

});

  $(document).on('click','.Edit_comboProduct',function(){
      let formdata= new FormData($('#ComboProductEditForm')[0]);
      $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

        $.ajax({
             url:'/combo/product/update',
             type:'POST',
             data:formdata,
             processData:false,
             contentType:false,
             success:function(response){
                if(response.status === 200){
                    $('#ComboProductEditForm')[0].reset();
                    $('#comboProductEditModal').modal('hide');
                    toastr.success("Combo Product Updated Successfully");
                    showComboProduct();

                }
             }





            });
  });


  $(document).on('click','.delete',function(){
     let id = $(this).data('id');
     $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

        $.ajax({
            url:'/combo/product/delete/',
            type:'POST',
            data:{id:id},
            success:function(response){
                if(response.status === 200){
                toastr.success("Combo Product Deleted Successfully");
                showComboProduct();
                }
            }
        })

  });


  $(document).on('click','.change_status',function(){
    let id = $(this).data('id');

     $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

        $.ajax({
            url:'/combo/product/change/status',
            type:'POST',
            data:{id:id},
            success:function(response){
                if(response.status === 200){
                toastr.success("Combo Product Status Change Successfully");
                showComboProduct();
                }
            }
        })
  })








    function showComboProduct(){

        $.ajax({
            url:'/combo/product/view',
            type:'GET',
            success:function(response){
                //  console.log(response);
                 if(response.status ===200){

                    let comboProduct=response.comboProduct;
                    //   console.log(comboProduct);
                    $('#comboProductTable').empty();
                    comboProduct.forEach(function(comboProduct,i){
                        $('#comboProductTable').append(`
                                    <tr>
                                        <td>${i+1}</td>
                                        <td>${comboProduct.product.product_name}</td>
                                        <td>${comboProduct.combo.name }</td>
                                         <td>${comboProduct.quantity}</td>
                                            <td>
                                                <button class="btn btn-sm ${comboProduct.status =='active'? 'btn-success' : 'btn-danger'} status_toggle change_status"
                                                    data-id="${comboProduct.id}"

                                                    data-status="${comboProduct.status}">

                                                ${comboProduct.status == 'active' ? 'Active' : 'Inactive'}
                                            </button>
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-info dropdown-toggle" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#" class="dropdown-item edit "  data-id="${comboProduct.id}" data-bs-toggle="modal"
                                                    data-bs-target="#comboProductEditModal">Edit</a></li>
                                                        <li><a href="#" class="dropdown-item delete" data-id="${comboProduct.id}">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                    </tr>


                                    `);
                    });

                 }
            }

        })
    }

    showComboProduct();
    </script>
@endsection
