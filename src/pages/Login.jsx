import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/features/auth/authSice";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Navigate } from "react-router-dom";
import supabase from "../services/supabase";

function Login() {
  const dispatch = useDispatch();
  const session = localStorage.getItem("session");
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        localStorage.setItem("session", session);
      }
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setLogin(session));
      localStorage.setItem("session", session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (session == null) {
    return (
      <div className="col-lg-4 mx-auto mt-5">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}

export default Login;
