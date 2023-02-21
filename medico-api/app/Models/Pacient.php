<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use  App\Models\CustomerAddress;

class Pacient extends Model
{
    protected $table = 'pacient';
    protected $fillable = [
        'nome',
        'sintomas',
        'email',
        'telefone',
    ];
}