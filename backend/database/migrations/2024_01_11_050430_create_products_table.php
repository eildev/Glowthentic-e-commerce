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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->unsigned();
            $table->unsignedBigInteger('subcategory_id')->unsigned();
            $table->integer('sub_subcategory_id	')->nullable();
            $table->unsignedBigInteger('brand_id')->unsigned();
            $table->string('product_feature');
            $table->string('product_name');
            $table->string('slug', 200);
            $table->string('short_desc');
            $table->string('long_desc');
            $table->string('product_image');
            $table->string('sku');
            $table->text('tags');
            $table->tinyInteger('status')->default(1);


            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');
            $table->foreign('subcategory_id')
                ->references('id')
                ->on('subcategories')
                ->onDelete('cascade');
            $table->foreign('brand_id')
                ->references('id')
                ->on('brands')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};