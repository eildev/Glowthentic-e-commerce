<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('invoice_number');
            $table->string('user_identity');
            $table->string('product_quantity');
            $table->float('product_total');
            $table->string('coupon_id')->nullable();
            $table->string('discount')->nullable();
            $table->float('sub_total');
            $table->string('shipping_method')->nullable();
            $table->float('shipping_amount')->nullable();
            $table->float('grand_total');
            $table->string('payment_method')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('payment_status')->nullable();
            $table->string('order_note')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
