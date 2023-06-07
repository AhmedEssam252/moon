@extends('EmailLayout')

@section('content')
<section id="mail">
    <h1 style="font-size: 22px;font-weight: 600;text-align: center;margin: 50px;color:#fff;">{{ $subject }}</h1>
    <p style="font-size: 22px;font-weight: 600;text-align: center;margin: 50px;color:#fff;">{{ $description }}</p>
 </section>
@endsection
