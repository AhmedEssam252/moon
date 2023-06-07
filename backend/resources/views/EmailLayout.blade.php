<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Moon Email</title>
    {{-- <link rel="stylesheet" href="{{asset('/css/MailMaster.css')}}"> --}}
</head>
<body>

    <div class="app" style="background:#023047;overflow-x: hidden;">
        <nav id="nav" style="display:flex;align-items:center;justify-content:center;padding:20px 0px;width:100%;margin:auto;">
            <div class="logo" >
               <a href="#" style="display:flex;justify-content:space-evenly;align-items:center;font-size:25px;margin:0 50px;
               text-decoration:none;font-size:20px;font-weight:bold;color:#ffffff;">
                  <img src="https://moonegypt.com/moon.svg" alt="MoonLogo" width="80" height="80" />
                  <h1 style="margin:0px 20px;font-weight:600;color:#fff;line-height: 35px;">{{__('mail.Moon')}}</h1>
               </a>
            </div>
        </nav>
        @yield('content')
        <div id="footer" class="section" style="width: 100%;height: 400px;margin-top: 250px;background: url(https://moonegypt.com/moonFooter.svg) no-repeat;background-size: cover;
        display: grid;justify-items: center;align-items: start;grid-auto-rows: 25% 65% 5%;font-size: 20px;font-weight: 600;">
            <div class="title" style="margin-top: 60px;position: relative;">
               <h1 style="color:#fff;line-height: 35px;font-weight:600;">{{__('mail.ContactUs')}}</h1>
            </div>
            <div class="content" style="display: flex;justify-content: center;align-items: center;margin-top: 50px;">
               <div class="logo" style="text-align: center;margin: 0 20px;">
                  <img src="https://moonegypt.com/moon.svg" alt="MoonLogo" width="120" height="120" />
                  <h1 style="color:#fff;line-height: 35px;font-weight:600;">{{__('mail.Moon')}}</h1>
               </div>
               <div class="text" style="width: 40%;margin: 0 20px;">
                  <p style="color:#fff;font-weight:600;">{{__('mail.smallCompany')}}</p>
                  <p style="color:#fff;font-weight:600;">{{__('mail.Email')}}</p>
               </div>
            </div>
            <p style="color:#fff;font-weight:600;">{{__('mail.copyrights')}}</p>
        </div>
    </div>
</body>
</html>

