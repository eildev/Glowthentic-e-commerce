<?php

// use App\Http\Controllers\AuthController;

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Backend\ProductController;
use App\Http\Controllers\Backend\TagNameController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\VendorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::post('/register', [AuthController::class, "register"]);
// Route::post('/login', [AuthController::class, "login"]);



Route::prefix('products')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/edit/{id}', [ProductController::class, 'show']);
    // Route::post('/add', [ProductController::class, 'store']);
});

Route::controller(CategoryController::class)->group(function () {
    Route::get('/category', 'view')->name('category.view');
    Route::get('/category/{id}', 'show')->name('category.show');
});
Route::controller(TagNameController::class)->group(function () {
    Route::get('/tagname', 'viewAll')->name('tagname.view');
    Route::get('/tagname/{id}', 'show')->name('tagname.show');
});
