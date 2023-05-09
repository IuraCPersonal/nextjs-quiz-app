import axios from "axios";
import { useContext } from "react";
import { useRouter } from "next/router";

import AuthContext from "../components/utils/auth-context";
import AuthForm from "@/components/auth/auth-form"

interface User {
  name: string,
  surname: string
}

const config = {
  headers: {
    "X-Access-Token":
      "5fe396bd750316df16783cfd0b857867f2b067ad8a37a143672e37f6a77cb81d",
  },
};

const AuthPage = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const onAddUserHandler = (userData: User) => {
    axios.post(
      "https://late-glitter-4431.fly.dev/api/v54/users",
      {
        "data": userData
      },
      config
    ).then(response => {
      authCtx.login(response.data.id, response.data.name);
      router.push("/");
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between"
    >
      <AuthForm onAddUser={onAddUserHandler} />
    </div>
  );
};

export default AuthPage;
