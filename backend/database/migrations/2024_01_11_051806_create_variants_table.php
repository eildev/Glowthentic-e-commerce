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
        Schema::create('variants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id')->unsigned();
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->float('regular_price');
            $table->string('discount');
            $table->integer('discount_amount');
            $table->integer('stock_quantity');
            $table->string('barcode')->nullable();
            $table->string('unit');
            $table->string('weight')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->date('expire_date')->nullable();
            $table->date('manufacture_date')->nullable();


            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('variants');
    }
};