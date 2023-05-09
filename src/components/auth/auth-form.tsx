import React, { useRef, useState } from "react";

interface Props {
  onAddUser: (userData: object) => {}
}

const AuthForm: React.FC<Props> = ({ onAddUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);

  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredSurname = surnameInputRef.current?.value;

    const userData = {
      name: enteredName,
      surname: enteredSurname
    };

    onAddUser(userData);
  }

  return (
    <section className="flex flex-col items-center justify-center rounded-xl bg-gray-800 p-20 my-auto">
      <h1 className="text-center text-white font-bold text-2xl mb-2">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form className="w-auto" onSubmit={submitHandler}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Your Name
          </label>
          <input ref={nameInputRef} type="text" id="name" required />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="surname" className="block text-white text-sm font-bold mb-2">
            Your Surname
          </label>
          <input ref={surnameInputRef} type="text" id="surname" required />
        </div>
        <div className={`flex flex-row gap-3 items-center justify-between`}>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-white hover:text-gray-700"
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
