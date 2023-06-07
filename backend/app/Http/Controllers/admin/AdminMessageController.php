<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\Message;
use App\Http\Controllers\Controller;
use App\Mail\ReplyMail;
use Illuminate\Support\Facades\Mail;

class AdminMessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Messages',['messages' => Message::all()]);
    }

    public function reply($id){

        return Inertia::render('SendEmail',['message' => Message::where('id', $id)->get()]);
        
    }
    
    public function SendReply(){

        $data = [
            'sendto' => request()->SendTo,
            'cc' => request()->cc,
            'bcc' => request()->bcc,
            'subject' => request()->subject,
            'description' => request()->description
        ];

        Mail::to($data['sendto'])
            ->cc($data['cc'])
            ->bcc($data['bcc'])
            ->send(new ReplyMail($data));

        return response()->json([
            'message' => 'successfuly'
        ]);
    }
}
