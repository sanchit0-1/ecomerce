import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { userdata } from "../store/actions/User.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    data.id = nanoid();
    console.log(data);
    dispatch(userdata(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col w-full md:w-1/2 lg:w-1/3 mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl space-y-6 transform transition-all duration-300 hover:shadow-2xl"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
        Login
      </h2>

      <div className="relative group">
        <input
          className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
          {...register("user")}
          type="text"
          required
          id="username"
          placeholder="username"
        />
        <label className="absolute left-0 -top-4 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-500 peer-focus:text-sm transition-all duration-300">
          Username
        </label>
      </div>

      <div className="relative group">
        <input
          className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
          {...register("email")}
          type="email"
          id="email"
          placeholder="hello@gmail.com"
        />
        <label className="absolute left-0 -top-4 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-500 peer-focus:text-sm transition-all duration-300">
          Email Address
        </label>
      </div>

      <div className="relative group">
        <input
          className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
          {...register("pass")}
          type="password"
          required
          id="password"
          placeholder="password"
        />
        <label className="absolute left-0 -top-4 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-500 peer-focus:text-sm transition-all duration-300">
          Password
        </label>
      </div>

      <button
        className="w-full py-3 mt-4 text-white font-bold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-200 transform hover:scale-105 active:scale-95"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
