import {nanoid} from "nanoid"
import {useForm} from "react-hook-form"
import { userdata } from "../store/actions/User.action"

const Login = () => {
  const {register, handleSubmit, reset} = useForm()

  const submitHandler = (data) => {
    data.id = nanoid()
    console.log(data)
    userdata(data);
  }

  return (
    <form className='flex flex-col w-1/3 ' onSubmit={handleSubmit(submitHandler)}>
      <input className='outline-0 border-b  focus:outline-none ' {...register("user")} type="text" required placeholder='username' />
      <input className=' input outline-0 border-b  focus:outline-none ' {...register("email")} type="email"  placeholder='hello@gamil.com' />
      <input className='outline-0 border-b  focus:outline-none ' {...register("pass")} type="password" required placeholder='password' />
      <button>submit</button>
    </form>
  )
}

export default Login