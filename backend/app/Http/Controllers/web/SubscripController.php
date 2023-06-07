<?php

namespace App\Http\Controllers\web;

use App\Models\Subscrip;
use App\Mail\subscripMail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class SubscripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Subscrip::select('id','Email')->get();
       
    }

    public function store(Request $request)
    {
        $request->validate([
            'Email'=>'required|email|unique:subscrips',
        ]);
        Subscrip::create([
            'Email' => $request->Email,
        ]);
        Mail::to($request->Email)->send(new subscripMail());
        return response()->json([
            'message'=>'Item added successfully',
        ]);
    }


 

}
