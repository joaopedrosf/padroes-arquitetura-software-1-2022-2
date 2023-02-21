<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials =  $request->all(['email','password']);
        $token = auth('api')->attempt($credentials);
        if($token){
            return response()->json($token);
        }else{
         return response("Error",403);
        }
    }
    public function logout(){
        auth('api')->logout();
        return response()->json(['msg'=> 'Logout realizado']);
    }
    public function refresh(Request $request){
        $token = auth('api')->refresh();
        return response()->json(['token'=> $token]);
    }
    public function me(){
        return response()->json(auth()->user());
    }
}
