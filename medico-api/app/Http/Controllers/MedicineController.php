<?php

namespace App\Http\Controllers;
use App\Services\OrderService;
use Illuminate\Http\Request;

use App\Models\Medicine;

class MedicineController extends Controller{
    function create(Request $request){
        $params = $request->all();
       $medicine = Medicine::create([
          "nome" =>  $params["nome"],
          "efeito" => $params["efeito"],
          "descricao" => $params["descricao"]
        ]);
        return response()->json($medicine,200);
    }
    function update(Request $request){
         $params = $request->all();
         $medicine = Medicine::where("id","=",$params["id"])->first();
         $medicine->nome = $params["nome"];
         $medicine->efeito = $params["efeito"];
         $medicine->descricao = $params["descricao"];
         $medicine->save();
        return response()->json($medicine,200);
    }
    function delete(Request $request){
        $params = $request->all();
        $medicine= Medicine::where("id","=",$params["id"])->delete();
    }

    function all(){
        return response()->json(Medicine::all(),200);
    }

    function pacient(){
        Medicine::join();
    }
}