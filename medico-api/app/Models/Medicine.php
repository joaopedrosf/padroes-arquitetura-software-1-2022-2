<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use  App\Models\CustomerAddress;

class Medicine extends Model
{
    protected $table = 'medicines';
    protected $fillable = [
        'nome',
        'efeito',
        'descricao',
    ];
}