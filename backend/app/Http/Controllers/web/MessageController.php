<?php

namespace App\Http\Controllers\web;

use App\Models\Message;
use App\Mail\messageMail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    public function index()
    {
       return Message::select('id','Name','Email','Type','Message')->get();
    }

    public function store(Request $request){
        $request->validate([
            'Email'=>'required|email',
        ]);
        Message::create([
            'Name' => $request->Name,
            'Email' => $request->Email,
            'Type' => $request->Type,
            'Message' => $request->Message,
        ]);
        Mail::to($request->Email)->send(new messageMail());
        return response()->json([
            'message'=>'Item added successfully',
        ]);
    }
}
