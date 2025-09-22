import { useState } from "react";

function Forget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/forget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.msg || "Check console for reset link");
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-red-950 mt-4">
        Forgot Password
      </h2>
      <form
        className="flex flex-col gap-5 justify-center items-center min-h-screen -mt-20  "
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3">
          <label className="font-medium w-20" htmlFor="email">
            Email
          </label>
          <input
            className="border bg-rose-50 rounded-2xl px-5 py-2 w-72"
            type="email"
            placeholder="Enter your bla bla bla"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="rounded-2xl text-white bg-red-800 hover:bg-red-900 text-lg px-6 py-2">
          <button type="submit">Reset Password</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Forget;
