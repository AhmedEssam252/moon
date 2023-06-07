<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\web\MessageController;
use App\Http\Controllers\web\SubscripController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('subscrip', [SubscripController::class,'index']);
Route::post('subscrip', [SubscripController::class,'store']);

Route::get('message', [MessageController::class,'index']);
Route::post('message', [MessageController::class,'store']);