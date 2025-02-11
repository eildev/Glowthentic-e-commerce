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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('userName');
            $table->text('socialId')->nullable();
            $table->string('fullName',100)->nullable();
            $table->string('pic',100)->nullable();
            $table->string('phone',16)->nullable();
            $table->string('present_address', 100)->nullable();
            $table->string('permanent_address', 100)->nullable();
            $table->enum('role',['superadmin','admin','user'])->default('user');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('status',['Active','Inactive'])->default('Active');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};