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
            $table->unsignedBigInteger('user_id')->unsigned();
            $table->unsignedBigInteger('combo_id')->nullable();
            $table->integer('total_quantity');

            $table->decimal('total_amount','10','2');
            $table->decimal('sub_total','10','2');
            $table->unsignedBigInteger('global_coupon_id')->nullable();
            $table->enum('payment_method', ['COD', 'bank', 'mobile_bank'])->nullable();
            $table->enum('shipping_method', ['In-House', 'Third-Party'])->nullable();

            $table->decimal('shipping_charge','10','2')->nullable();
            $table->decimal('grand_total','10','2');
            $table->enum('status', ['pending', 'completed', 'cancelled', 'returned'])->default('pending');
            $table->enum('payment_status', ['paid', 'processing','due']);
            $table->string('order_note')->nullable();


            // $table->string('discount')->nullable();
            // $table->float('sub_total');
            // $table->string('payment_id')->nullable();






            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('global_coupon_id')->references('id')->on('coupons');
            $table->foreign('combo_id')->references('id')->on('combos');
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
