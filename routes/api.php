<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

use App\Http\Controllers\Auth\LoginController;
Route::post('login', [LoginController::class, 'login']);
Route::post('email_check', [LoginController::class, 'email_check']);
Route::post('logout', [LoginController::class, 'logout']);
Route::get('user', [LoginController::class, 'user']);

use App\Http\Controllers\Auth\RegisterController;
Route::post('register', [RegisterController::class, 'register']);