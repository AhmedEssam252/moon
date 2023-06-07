<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\admin\AdminMessageController;
use App\Http\Controllers\admin\AdminSubscripController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    Route::group([
        'controller' => AdminMessageController::class,
    ],function (){
        Route::get('/messages','index')->name('Messages');
        Route::get('/test',function(){
            return view('emails.message');
        });
        Route::get('/reply/{id}','reply')->name('Reply');
        Route::post('/reply/{id}','sendreply')->name('SendReply');
    });

    Route::group([
        'controller' => AdminSubscripController::class,
    ],function (){
        Route::get('/subscrip','index')->name('Subscrips');
    });
});
