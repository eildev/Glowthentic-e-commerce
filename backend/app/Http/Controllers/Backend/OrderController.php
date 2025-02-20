<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Variant;
use App\Models\Coupon;
use Carbon\Carbon;
use App\Models\OrderDetails;
use App\Models\ComboProduct;
use App\Models\Combo;
use App\Models\Product;
use App\Models\ProductPromotion;
use Auth;
class OrderController extends Controller
{
//     public function store(Request $request){
//         try{

//           $order = new Order();
//           $order->user_id = 1;
//           $order->invoice_number =rand(123456,999999);
//           $combo= $request->combo_id;
//           $total_quantity=0;
//           $total_price=0;
//           $combo_price=0;
//           $combo_quantity=0;
//           $variant_price=0;
//           $variant_quantity=0;
//         foreach($request->products as $product){

//            $single_variant=Variant::find($product['variant_id']);
//             $product_id=$single_variant->product_id;
//             $product_combo = ComboProduct::where('product_id',$product_id)->where('combo_id',$combo)->first();

//            if($product_combo ){
//             $combo=Combo::where('id',$combo)->where('status','active')->first();
//             if($combo){
//                 $combo_quantity +=$product_combo->quantity;
//                 $combo_price +=$combo->offerd_price;
//             }
//            }

//            else{
//             if($single_variant->regular_price==$product['variant_price']){
//                 $variant_quantity += $product['variant_quantity'];
//                 $variant_price += $single_variant->regular_price * $product['variant_quantity'];
//                }
//              else{
//                 return response()->json([
//                     'status'=>400,
//                     'message'=>'Price is not match',
//                 ]);
//              }
//            }



//         }
//          $total_quantity = $variant_quantity+$combo_quantity;
//          $total_price = $variant_price+$combo_price;


//         $order->total_quantity = $total_quantity;
//         $order->total_amount = $total_price;

//         $order->payment_method = $request->payment_method;
//         $order->shipping_method = $request->shipping_method;
//         $order->shipping_charge = $request->shipping_charge;
//         $order->combo_id = $request->combo_id;
//         $order->status = 'pending';
//         $order->payment_status = 'due';
//         $order->order_note=$request->order_note;
//         if($request->coupon_code){
//            $coupon = Coupon::where('cupon_code',$request->coupon_code)->where('is_global',1)
//            ->where('end_date', '>=', Carbon::today())
//            ->first();
//            if(!$coupon){
//             return response()->json([
//                 'status'=>400,
//                 'message'=>'Invalid Coupon Code',
//             ]);
//            }
//            else{
//             $order->global_coupon_id = $coupon->id;
//             if($coupon->discount_type=='fixed'){

//                 $order->grand_total = $total_price +$request->shipping_charge - $coupon->discount_value;
//             }
//             else{

//                 $order->grand_total = $total_price +$request->shipping_charge -($total_price * $coupon->discount_value)/100;
//             }
//            }

//         }

//        else{
//         $order->grand_total = $total_price +$request->shipping_charge;
//        }

//      $order->save();

//      if ($order->id) {
//         foreach ($request->products as $product) {

//             $single_variant = Variant::find($product['variant_id']);


//             $product_id = $single_variant->product_id;
//             $product_combo = ComboProduct::where('product_id', $product_id)
//                                          ->where('combo_id', $request->combo_id)
//                                          ->first();

//             if ($product_combo) {

//                 $combo = Combo::where('id', $request->combo_id)
//                               ->where('status', 'active')
//                               ->first();

//                 if ($combo) {
//                     $orderDetails = new OrderDetails();
//                     $orderDetails->order_id = $order->id;
//                     $orderDetails->product_id = $product_id;
//                     $orderDetails->variant_id = $product['variant_id'];
//                     $orderDetails->product_quantity = $product_combo->quantity;
//                     $orderDetails->unit_price = $combo->offerd_price;
//                     $orderDetails->total_price = $combo->offerd_price;
//                     $orderDetails->save();
//                     continue;
//                 }
//             }

//             else {

//                 $orderDetails = new OrderDetails();
//                 $orderDetails->order_id = $order->id;
//                 $orderDetails->product_id = $product_id;
//                 $orderDetails->variant_id = $product['variant_id'];
//                 $orderDetails->product_quantity = $product['variant_quantity'];
//                 $orderDetails->unit_price = $product['variant_price'];
//                 $orderDetails->total_price = $product['variant_price'] * $product['variant_quantity'];
//                 $orderDetails->save();
//                continue;
//             }

//         }
//     }

//     return response()->json([
//         'status'=>200,
//         'order'=>$order,
//         'message'=>'Order Created Successfully',
//         ]);
//     }
//     catch(\Exception $e){
//         return response()->json([
//             'status'=>500,
//             'message'=>$e->getMessage(),
//         ]);
//     }
//  }


    public function store(Request $request){
         try{


            $variant_quantity = 0;
            $variant_price = 0;
            $variant_total_price = 0;

            $total_quantity = 0;
            $total_price = 0;
            $discount_price = 0;

            foreach ($request->products as $product) {
                $variant = Variant::where('id', $product['variant_id'])->first();

                if ($variant->regular_price == $product['variant_price']) {

                    $variant_quantity += $product['variant_quantity'];
                    $variant_price += $product['variant_price'] * $product['variant_quantity'];

                    $product_promotion = ProductPromotion::where('product_id', $variant->product_id)
                        ->latest()
                        ->first();

                    $discount_amount = 0;
                    if ($product_promotion) {
                        $coupon = Coupon::where('id', $product_promotion->id)
                            ->where('is_global', 0)
                            ->where('end_date', '>=', Carbon::today())
                            ->first();

                        if ($coupon) {
                            if ($coupon->discount_type == 'fixed') {
                                $discount_amount = $coupon->discount_value * $product['variant_quantity'];
                            } else {
                                $discount_amount = ($variant_price * $coupon->discount_value) / 100 * $product['variant_quantity'];
                            }
                        }
                    }
                    elseif(isset($product['cupon_code']) && !empty($product['cupon_code'])) {

                        $coupon = Coupon::where('cupon_code', $product['cupon_code'])
                            ->where('is_global', 0)
                            ->where('end_date', '>=', Carbon::today())
                            ->first();

                        if($coupon) {
                            if ($coupon->discount_type == 'fixed') {
                                $discount_amount = $coupon->discount_value * $product['variant_quantity'];
                            } else {
                                $discount_amount = ($variant_price * $coupon->discount_value) / 100 * $product['variant_quantity'];
                            }
                        }
                    }
                    $discount_price += $discount_amount;
                    $variant_total_price = $variant_price - $discount_price;
                } else {
                    return response()->json([
                        'status' => 400,
                        'message' => 'Variant Price Does not match',
                    ]);
                }
            }

            $combo_quantity = 0;
            $combo_price = 0;
                if($request->combo){
                    foreach($request->combo as $combo){

                        $combo_product = ComboProduct::where('combo_id',$combo['combo_id'])->first();
                        $single_combo= Combo::where('id',$combo['combo_id'])->where('status','active')->first();
                        if($single_combo){
                            $combo_quantity+=$combo['combo_quantity'];
                            $combo_price += $single_combo->offerd_price * ($combo['combo_quantity'] ?? 1);

                    }
                }
                }

              $total_price = $variant_total_price + $combo_price;
              $total_quantity = $variant_quantity + $combo_quantity;
              $order = new Order();
              $order->total_amount = $total_price;
              $order->total_quantity = $total_quantity;
              $order->payment_method = $request->payment_method;
              $order->shipping_method = $request->shipping_method;
              $order->shipping_charge = $request->shipping_charge;
              if($request->payment_method == 'COD'){
                  $order->payment_status = 'due';
              }else{
                  $order->payment_status = 'paid';
              }
              $order->status = 'pending';
              if($request->coupon_code){

              }
              $order->order_note=$request->order_note;
              $order->invoice_number = rand(100000, 999999);
              $order->user_id =1;


              if($request->coupon_code){
                $coupon = Coupon::where('cupon_code',$request->coupon_code)->where('is_global',1)
                ->where('end_date', '>=', Carbon::today())
                ->first();
                if(!$coupon){
                 return response()->json([
                     'status'=>400,
                     'message'=>'Invalid Coupon Code',
                 ]);
                }
                else{
                 $order->global_coupon_id = $coupon->id;
                 if($coupon->discount_type=='fixed'){
                     $order->sub_total = $total_price - $coupon->discount_value;
                     $order->grand_total = $total_price +$request->shipping_charge - $coupon->discount_value;
                 }
                 else{
                     $order->sub_total = $total_price - ($total_price * $coupon->discount_value)/100;
                     $order->grand_total = $total_price +$request->shipping_charge -($total_price * $coupon->discount_value)/100;
                 }
                }

             }
             else{
                $order->sub_total = $total_price;
                 $order->grand_total = $total_price +$request->shipping_charge;
             }

            $order->save();

            if($order->id){
                if($request->products){
                    foreach($request->products as $product){
                        $order_details = new OrderDetails();
                        $order_details->order_id = $order->id;
                        $order_details->product_id = $product['product_id'];
                        $order_details->variant_id = $product['variant_id'];
                        $order_details->product_quantity = $product['variant_quantity'];
                        $order_details->unit_price = $product['variant_price'];
                        $order_details->total_price = $product['variant_price'] * $product['variant_quantity'];
                        $order_details->save();
                    }
                }

                if($request->combo){
                    foreach($request->combo as $combo){
                        $combo_product = ComboProduct::where('combo_id',$combo['combo_id'])->first();
                        $single_combo= Combo::where('id',$combo['combo_id'])->where('status','active')->first();
                        if($single_combo){
                        $order_details = new OrderDetails();
                        $order_details->order_id = $order->id;
                        $order_details->combo_id = $combo['combo_id'];
                        $order_details->product_quantity = $combo['combo_quantity'];
                        $order_details->unit_price =$single_combo->offerd_price;
                        $order_details->total_price = $single_combo->offerd_price * ($combo['combo_quantity'] ?? 1);
                        $order_details->save();
                        }
                    }
                }
            }

            return response()->json([
                'status'=>200,
                'order'=>$order,
                 'order_details'=>$order->orderDetails,
                // 'variant'=>$variant,
                // 'variant_quantity'=>$variant_quantity,
                // 'variant_price'=>$variant_price,
                // 'discount_price'=>$discount_price,
                // 'variant_total_price'=>$variant_total_price,
                // 'combo_quantity'=>$combo_quantity,
                // 'combo_price'=>$combo_price,
                'message'=>'Order Created Successfully',
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
