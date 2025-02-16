@extends('backend.master')
@section('admin')
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Manage Combos</h5>

                        <a href="#" class="btn btn-info btn-sm text-light " data-bs-toggle="modal"
                            data-bs-target="#comboAddModal">
                            <i class='bx bx-plus'></i>
                        </a>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table id="example" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Combo Name</th>
                                    <th>Combo Price</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="showTableData">

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="comboAddModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Combo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row g-3" id="comboAddForm" enctype="multipart/form-data">
                        <div class="col-md-6">
                            <label for="inputFirstName" class="form-label">Combo Name</label>
                            <input type="email" class="form-control" id="inputFirstName" name="combo_name">
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName" class="form-label">Combo Price</label>
                            <input type="number" class="form-control" id="inputLastName" name="combo_price">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail" class="form-label">Image</label>
                            <input type="file" class="form-control" id="inputEmail" name="image">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary save_combo">Save changes</button>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="comboUpdateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Update Combo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row g-3" id="comboUpdateForm" enctype="multipart/form-data">
                        <input type="hidden" id="combo_id" name="combo_id">
                        <div class="col-md-6">
                            <label for="inputFirstName" class="form-label">Combo Name</label>
                            <input type="email" class="form-control" id="combo_name" name="combo_name">
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName" class="form-label">Combo Price</label>
                            <input type="number" class="form-control" id="combo_price" name="combo_price">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail" class="form-label">Image</label>
                            <input type="file" class="form-control" id="inputEmail" name="image">
                        </div>
                        <div>
                            <img src="" class="img-show" height="100" width="100" alt="">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary update_combo">Update changes</button>
                </div>
            </div>
        </div>
    </div>

    {{-- <script src="{{ asset('backend/main-js/combo.js') }}"></script> --}}

    <script>

        $(document).on('click', '.save_combo', function() {
            let formData = new FormData($('#comboAddForm')[0]);


            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: '/combo/store',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {
                    $('#comboAddForm')[0].reset();
                    $('#comboAddModal').modal('hide');
                    toastr.success('Combo Added Successfully');
                    showData();
                },
            });
        });





        // update combo
        $(document).on('click', '.update_combo', function () {
                let formData= new FormData($('#comboUpdateForm')[0])

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                $.ajax({
                    url: '/combo/update',
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        console.log('Success:', data);
                        $('#comboUpdateForm')[0].reset();
                        $('#comboUpdateModal').modal('hide');
                        toastr.success('Combo updated successfully');
                        showData();
                    },
                    error: function (xhr, status, error) {
                        console.log('AJAX Error:', error);
                    }
                });
            });



        // Deleted Combo
          $(document).on('click','.delete',function(){

            let id = $(this).data("id");
            console.log(id);
            $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

             $.ajax({
                url:'/combo/delete',
                type:'POST',
                data:{
                    id:id
                },
                success:function(data){

                    console.log(data);
                   toastr.success("Combo Delete Successfully");
                    showData();
                },
             });

          });

        // change Status
         $(document).on('click','.status_inactive',function(){

            let status_id=$(this).data("id");
            $.ajaxSetup({
                headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
            });

            $.ajax({
               url:'/combo/status/change',
               type:'post',
               data:{
                status_id:status_id
               },
               success:function(data){

                   console.log(data);
                   toastr.success("Combo Status Change Successfully");
                    showData();

               }

            });

         });

          // show all data
        function showData() {
            // alert('ok');
            $.ajax({
                url: '/combo/view',
                type: 'GET',
                success: function(data) {
                    if (data.status == 200) {

                        const combos = data.combos;
                        // Clear existing table rows if needed
                        $('#showTableData').empty();

                        // Loop through the combos array and append each item
                        combos.forEach(function(combo) {
                            $('#showTableData').append(`
                            <tr>
                                <td>${combo.id}</td>
                                <td>${combo.name ?? ""}</td>
                                <td>${combo.offerd_price}</td>
                                <td>
                                <img src="/uploads/combo/${combo.image}" alt="Combo Image" class="img-thumbnail" style="max-width: 100px; max-height: 100px;">
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-danger status_inactive" value="${combo.status}" data-id="${combo.id}">${combo.status}</button>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-info dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" class="dropdown-item edit"  data-id="${combo.id}" data-bs-toggle="modal"
                                        data-bs-target="#comboUpdateModal">Edit</a></li>
                                            <li><a href="#" class="dropdown-item delete" data-id="${combo.id}">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                `);
                        });

                    }
                },
            });
        }

        $(document).on('click', '.edit', function(e) {
            e.preventDefault();
            // alert('Ok');
            let id = $(this).attr('data-id');
            $.ajax({
                url: '/combo/view/' + id,
                type: 'GET',
                success: function(data) {
                    if (data.status == 200) {
                        let combo = data.combo;
                        $("#combo_id").val(combo.id??'');
                        $("#combo_name").val(combo.name ?? '');
                        $("#combo_price").val(combo.offerd_price ?? '');
                        $(".img-show").attr("src", `/uploads/combo/${combo.image}`);

                    }
                }
            })
        })


        showData();
    </script>
@endsection
