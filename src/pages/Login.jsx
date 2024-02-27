import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/features/auth/authSice";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";

function Login() {
  const session = useSelector((state) => state.auth.session);
  const dispatch = useDispatch()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setLogin(session));
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setLogin(session));
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <>
      {!session ? (
        <div className="col-lg-4 mx-auto mt-5">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
          />
        </div>
      ) : (
        "udah login"
      )}
    </>
  );
}

export default Login;
