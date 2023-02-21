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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('auth')->group(function(){
    Route::post('login','App\Http\Controllers\AuthController@login');
    Route::post('logout','App\Http\Controllers\AuthController@logout');
    Route::post('refresh','App\Http\Controllers\AuthController@refresh');
    Route::post('me','App\Http\Controllers\AuthController@me');
});

Route::post("createPacient",'App\Http\Controllers\PacientController@create');
Route::post("updatePacient",'App\Http\Controllers\PacientController@update');
Route::post("deletePacient",'App\Http\Controllers\PacientController@delete');
Route::post("assignMedicine",'App\Http\Controllers\PacientController@medicine');
Route::get("pacientes",'App\Http\Controllers\PacientController@all');

Route::post("createMedicine",'App\Http\Controllers\MedicineController@create');
Route::post("updateMedicine",'App\Http\Controllers\MedicineController@update');
Route::post("deleteMedicine",'App\Http\Controllers\MedicineController@delete');
Route::get("medicines",'App\Http\Controllers\MedicineController@all');
Route::get("pacientMedicines",'App\Http\Controllers\MedicineController@pacient');