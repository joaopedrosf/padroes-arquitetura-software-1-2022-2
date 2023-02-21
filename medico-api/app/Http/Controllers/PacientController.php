<?php

namespace App\Http\Controllers;
use App\Services\OrderService;
use Illuminate\Http\Request;
use App\Models\Pacient;
use App\Models\PacientMedicine;

class PacientController extends Controller{
   function create(Request $request){
        $params = $request->all();
        $pacient = Pacient::create([
            "nome"=> $params["nome"],
            "sintomas"=> $params["sintomas"],
            "email"=> $params["email"],
            "telefone"=> $params["telefone"],
        ]);

        return response()->json($pacient,200);
    }
    function update(Request $request){
        $params = $request->all();
        $pacient = Pacient::where("id","=",$params["id"])->first();
         $pacient->nome = $params["nome"];
         $pacient->sintomas = $params["sintomas"];
         $pacient->email = $params["email"];
         $pacient->telefone = $params["telefone"];
         $pacient->save();
        return response()->json($pacient,200);
    }
    function delete(Request $request){
        $params = $request->all();
        Pacient::where("id","=",$params["id"])->delete();
    }
    function medicine(Request $request){
        $params = $request->all();
        $pacient_medicine = PacientMedicine::create([
            "pacient_id" => $params["pacient_id"],
            "medicine_id" => $params["medicine_id"]
        ]);
    }
    function all(){
        return response()->json(Pacient::all(),200);
    }
}