import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !pass){
      alert("bharde bhai chota form hai");
      return
    }
    //get saved user
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Signup kon karega seedha login pe aa gayaa waah");
    }

    //check match
    if (email === savedUser.email && pass === savedUser.pass) {
      alert("✅✅ 7 crore");
      navigate(); // navigate to wherever you want after successfull login
    } else {
      alert("👺Try again 👹");
    }
  };
  return (
    <div>
      <h1 className="bg-rose-200 text-5xl font-bold items-center justify-center flex h-20 pb-2">
        Login page
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-7 justify-center bg-rose-200 items-center min-h-screen -mt-20 ">
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="email"
            placeholder="Your Email please"
            value={email}
            onChange = {(e) => {
              setEmail(e.target.value)
            }}

          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="password"
            placeholder="Your password please"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded-2xl text-white bg-stone-500 hover:bg-stone-700 text-lg px-6 py-2"
        >
          Login ji
        </button>
      </form>
    </div>
  );
};

export default Login;
