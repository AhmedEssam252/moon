<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Moon Email</title>
</head>
<body>
    <div class="app" style="background:#023047;overflow-x: hidden;">
        <nav id="nav" style="padding:20px 0px;width:100%;margin:auto;">
            <div class="logo" >
               <a href="#" style="font-size:25px;margin:0 20px;
               text-decoration:none;font-size:20px;font-weight:bold;color:#ffffff;">
                  <img src="https://moonegypt.com/moon.svg" alt="Moon Logo" width="80" height="80" />
                  <h1 style="margin:0px 20px;font-weight:600;color:#fff;line-height: 35px;">{{__('mail.Moon')}}</h1>
               </a>
            </div>
        </nav>
        @yield('content')
        <img src="https://dashboard.moonegypt.com/images/home/spaceShips2.svg" alt="" width="300px" height="190px">
        <div id="footer" class="section" style="display:grid;width: 100%;font-size: 18px;grid-auto-rows: auto;border-top: 40px solid #fff;background: #858585;">
            <div class="title" style="margin-top: 60px;position: relative;">
            </div>
            <div class="content" style="display: flex;justify-content: center;align-items: center;">
               <div class="logo" style="text-align: center;margin: 0 20px;">
                  <img src="https://moonegypt.com/moon.svg" alt="MoonLogo" width="120" height="120" />
                  <h1 style="color:#fff;line-height: 35px;font-weight:600;">{{__('mail.Moon')}}</h1>
                  <p style="color:#fff;font-weight:600;">{{__('mail.Email')}}</p>
               </div>
            </div>
            <p style="color:#fff;font-weight:600;text-align:center;font-size:14px">{{__('mail.copyrights')}}</p>
        </div>
    </div>
</body>
</html>

{{-- <div class="text" style="width: 40%;margin: 0 20px;">
    <p style="color:#fff;font-weight:600;">{{__('mail.smallCompany')}}</p>
 </div> --}}
