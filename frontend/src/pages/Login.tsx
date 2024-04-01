const Login = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
        <div className="p-2 space-y-2 flex flex-col justify-center">
          <h1 className="text-sky-400 font-extrabold text-4xl text-center p-2">
            Connectify
          </h1>
          <p className="p-2 font-semibold">Building Bridges, Creating Bonds</p>
        </div>

        <div className="grid grid-cols-1 bg-white">
          <input
            className="p-2 border border-black m-2 rounded-md outline-none"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border border-black m-2 rounded-md outline-none"
            type="text"
            placeholder="Password"
          />
          <a className="m-2 text-sm" href="#">
            Forgot password?
          </a>
          <button className="bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white font-semibold p-2 m-2 rounded-md">
            Login
          </button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <button className="bg-black hover:bg-slate-900 active:bg-slate-800 rounded-md text-white mt-2 mx-2 p-2">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
