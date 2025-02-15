<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function logout(Request $request)
    {
        Auth::guard()->logout();
    }
    protected function login(Request $request)
    {
        // 유저 조회
        $user = User::where([['email', $request->email]])->first();
        // Email 계정 조회
        if(empty($user)){
            return response()->json(
                ['error' => 'no email account'], 422
            );
        }

        // PWD로 조회
        if(Hash::check($request->password, $user->password)){
            Auth::login($user);

            Log::info(Auth::user());
            return response()->json(
                status: 204,
                data : $user
            );
        } else {
            return response()->json(
                ['error' => 'no pwd account'], 423
            );
        }

        // 유저 인증
        
    }

    protected function email_check(Request $request)
    {
        // 유저 조회
        $user = User::where([['email', $request->email]])->first();
        // Email로 조회해서 계정있는지
        if(isset($user)){
            return response()->json(
                ['error' => '이미 있음'], 422
            );
        }

        return response()->json(
            status: 204,
            data : $user
        );
    }

    protected function user(Request $request){
        $user = Auth::user();
        if(isset($user)){
            return response()->json(
                status: 200,
                data : $user
            );
        } else {
            return response()->json(
                status: 201,
                data : null
            );
        }
    }
}
