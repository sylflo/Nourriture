package cn.bjtu.nourriture.api;

import android.util.Log;

import cn.bjtu.nourriture.model.Login;
import cn.bjtu.nourriture.model.Message;
import cn.bjtu.nourriture.model.Register;
import cn.bjtu.nourriture.model.User;
import retrofit.http.Body;
import retrofit.http.GET;
import retrofit.http.POST;
import retrofit.http.Path;
import rx.Observable;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public interface NourritureService {

    @GET("users/username/{login}")
    Observable<User> getUser(@Path("login") String login);

    @POST("users/register")
    Observable<Message> registerUser(@Body Register user);

    @POST("users/sign-in")
    Observable<Message> loginUser(@Body Login user);

}
