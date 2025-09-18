import React, { useState } from "react";

const Signup = () => {
  const [age, setAge] = useState(10);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  //signup function
  const handleSignup = (e) => {
    e.preventDefault();

    const user = {name, email, pass, age};
    localStorage.setItem("user",JSON.stringify(user));
    setMessage("😔Signup ho gayaa hai😔")

    setName('');
    setEmail('');
    setPass('');
    setAge('')
  }

  return (
    <div>
      <h1 className="bg-rose-200 text-5xl shadow-2xl font-bold items-center justify-center flex h-17 pb-2">
        Signup page
      </h1>

      <form
        action="submit"
        className="flex flex-col gap-4 justify-center bg-rose-200 items-center min-h-screen "
      >
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className=" border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="name"
            placeholder="Your name please"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="Email">
            Email
          </label>
          <input
            className=" border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="email"
            placeholder="Your Email please"
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-20 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className=" border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="number"
            placeholder="Your password please"
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
            onChange={(e) =>setAge(e.target.value)}
          />
          <span className="font-semibold">{age}</span>
        </div>
        <button className="rounded-2xl text-white bg-stone-500 hover:bg-stone-700 text-lg px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
