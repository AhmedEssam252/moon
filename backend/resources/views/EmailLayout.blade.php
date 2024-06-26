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
            <table width="100%">
                <tbody>
                    <tr align="left">
                        <td>
                            <div class="logo" >
                                <a href="#" style="font-size:25px;margin:50px;
                                text-decoration:none;font-size:20px;font-weight:bold;color:#ffffff;">
                                   <img src="https://moonegypt.com/moon.png" alt="Moon Logo" width="80" height="80" />
                                </a>
                             </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </nav>
        @yield('content')
        <table width="100%">
            <tbody>
                <tr align="center">
                    <td>
                        <img src="https://moonegypt.com/spaceShips2.png" alt="" width="300px" height="190px">
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="footer" class="section" style="display:grid;width: 100%;font-size: 18px;grid-auto-rows: auto;border-top: 40px solid #fff;background: #858585;">
            <table width="100%">
                <tbody>
                    <tr align="center">
                        <td>
                            <div class="content">
                                <div class="logo" style="margin: 0 20px;">
                                   <img src="https://moonegypt.com/moon.png" alt="MoonLogo" width="120" height="120" />
                                   <h1 style="color:#fff;line-height: 35px;font-weight:600;">{{__('mail.Moon')}}</h1>
                                   <p style="color:#fff;font-weight:600;">{{__('mail.Email')}}</p>
                                </div>
                             </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style="color:#fff;font-weight:600;text-align:center;font-size:14px">{{__('mail.copyrights')}}</p>
        </div>
    </div>
</body>
</html>

{{-- <div class="text" style="width: 40%;margin: 0 20px;">
    <p style="color:#fff;font-weight:600;">{{__('mail.smallCompany')}}</p>
 </div> --}}
