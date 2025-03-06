@extends('backend.master')
@section('admin')
    <div class="page-content">
        <div class="row">
            <div class="card border-top border-0 border-3 border-info col-md-12">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 text-info">Shipping order list</h5>

                        <a href="{{ route('popupMessage') }}" class="btn btn-info btn-sm text-light ">
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
                                    <th>Payment Status</th>
                                    <th>Order Status</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @php
                                    $serialNumber = 1;
                                @endphp
                                @if ($delivering_orders->count() > 0)
                                    @foreach ($delivering_orders as $delivering_orders)
                                    @php
                                    $originalDateString = $delivering_orders->order->created_at;
                                    $dateTime = new DateTime($originalDateString);
                                    $formattedDate = $dateTime->format('Y-m-d');
                                    @endphp
                                        <tr>
                                            <td>{{ $serialNumber++ }}</td>
                                                <td>{{ $formattedDate }}</td>
                                                <td>{{ $delivering_orders->order->invoice_number }}</td>
                                                <td>0170........</td>
                                                <td>{{ $delivering_orders->order->total_quantity }}</td>
                                                <td>{{ $delivering_orders->order->grand_total }}</td>
                                                <td>{{ $delivering_orders->order->payment_method }}</td>
                                                <td>{{ $delivering_orders->order->payment_status }}</td>

                                                <td>
                                                    <span class="text-warning text-capitalize">{{$delivering_orders->delivery_status}}</span>
                                                </td>
                                                <td>Banasree</td>
                                            <td>
                                                {{-- <a href="{{ route('admin.completed.order',$delivering_orders->order->invoice_number) }}" class="btn btn-sm btn-info">Complete</a> --}}

                                                <a href="{{ route('admin.shipping.order.change.transit',$delivering_orders->id) }}" class="btn btn-sm btn-info">In Transit</a>
                                                <a href="{{ route('order.details', $delivering_orders->id) }}" class="btn btn-sm btn-success" >View</a>
                                                <a href="#" class="btn btn-sm btn-danger" id="delete">Cancel</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="10" class="text-center text-warning">Data not Found</td>
                                    </tr>
                                @endif
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>
@endsection
