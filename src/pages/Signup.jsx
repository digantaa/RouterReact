import React, { useState } from "react";
import {useNavigation} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigation();
  const [age, setAge] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault(); //stops page refresh 

    //form data validation
    if (!name || !email || !pass || !age) {
    alert("Shanti se form ni bharaa jaara kya!");
    return;
  }
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{6,8}$/;
  if (!passRegex.test(pass)) {
    alert(
      "Password must be at least 6 characters long and maximum 8 characters long, /ninclude 1 uppercase letter and 1 number bla bla bla."
    );
    return;
  }

    const user = { name, email, pass, age };
    localStorage.setItem("user", JSON.stringify(user));
    setMessage("😔 Signup ho gaya hai 😔");

    setName("");
    setEmail("");
    setPass("");
    setAge('');

    // redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <h1 className="bg-rose-200 text-5xl shadow-2xl font-bold items-center justify-center flex h-20 pb-2">
        Signup page
      </h1>

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 justify-center bg-rose-200 items-center min-h-screen "
      >
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="text"
            placeholder="Your name please"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="email"
            placeholder="Your Email please"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="age">
            Age
          </label>
          <input
            className="w-72 accent-stone-500 cursor-pointer"
            type="range"
            min="10"
            max="99"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <span className="font-semibold">{age}</span>
        </div>

        <button
          type="submit"
          className="rounded-2xl text-white bg-stone-500 hover:bg-stone-700 text-lg px-6 py-2"
        >
          SignUp ji
        </button>

        {message && (
          <p className="mt-4 text-lg font-semibold text-green-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Signup;
