<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DeliveryOrder;
use App\Models\Order;
use Validator;
class DeliverOrderAssignController extends Controller
{

    public function assignDeliver(Request $request){
        try{
            $validator = Validator::make($request->all(), [

                 'order_id' => 'required',
                 'delivery_method' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
             $order = Order::where('id', $request->order_id)->first();
             $order->status = "Delivering";
             $order->save();
            $deliver_order_assign = new DeliveryOrder();
            $deliver_order_assign->order_id = $request->order_id;
            $deliver_order_assign->delivery_method = $request->delivery_method;
            $deliver_order_assign->courier_service = $request->courier_service;
            $deliver_order_assign->assign_to = $request->assign_to;
            $deliver_order_assign->save();
            return response()->json([
                'status'=>200,
                'message'=>'Delivery Order Assign Successfully',
            ]);

        }
        catch(\Exception $e){
            return response()->json([
                'status'=>500,
                'message'=>$e->getMessage(),
            ]);
         }
    }
}
