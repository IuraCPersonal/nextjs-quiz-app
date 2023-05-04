import React, { useState } from "react";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-white font-bold text-2xl mb-2">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form className="w-64">
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Your Email
          </label>
          <input type="email" id="email" required />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Your Password
          </label>
          <input type="password" id="password" required />
        </div>
        <div className={`flex ${isLogin ? "flex-row" : "flex-col"} gap-3 items-center justify-between`}>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-700"
            onClick={switchAuthModelHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section >
  );
}

export default AuthForm;
