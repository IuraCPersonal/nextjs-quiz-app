import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../utils/auth-context";

const MainNavigation: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center bg-gray-800 max-w-screen h-20 px-10 py-2">
      <Link href="/">
        <div className="text-4xl text-white m-0 font-pacifico" id="logo">
          QLand
        </div>
      </Link>
      <nav>
        <ul className="flex items-baseline m-0 p-0 text-white">
          <li className="mx-4 font-bold">
            {!authCtx.isLoggedIn && <Link href="/auth">Login</Link>}
          </li>
          <li className="mx-4 font-bold">
            <Link href="/profile">{authCtx.isLoggedIn ? authCtx.name : 'Profile'}</Link>
          </li>
          <li className="mx-4 font-bold">
            <button className="py-2 px-6 border border-white bg-transparent rounded-lg" onClick={authCtx.logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
