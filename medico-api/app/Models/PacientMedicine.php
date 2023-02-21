<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use  App\Models\CustomerAddress;

class PacientMedicine extends Model
{
    protected $table = 'pacient_medicines';
    protected $fillable = [
        'pacient_id',
        'medicine_id',
    ];
}