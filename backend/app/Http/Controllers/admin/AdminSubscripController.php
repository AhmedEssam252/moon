<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\Subscrip;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminSubscripController extends Controller
{
    public function index()
    {
        return Inertia::render('Subscrips',['subscrips' => Subscrip::all()]);
    }}
