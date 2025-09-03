import {nanoid} from "nanoid"
import {useForm} from "react-hook-form"

const Login = () => {
  const {register, handleSubmit, reset} = useForm()

  const submitHandler = (data) => {
    data.id = nanoid()
    console.log(data)
  }

  return (
    <form className='flex flex-col w-1/3 ' onSubmit={handleSubmit(submitHandler)}>
      <input className='outline-0 border-b  focus:outline-none ' {...register("user")} type="text" placeholder='username' />
      <input className='outline-0 border-b  focus:outline-none ' {...register("email")} type="email" name=" " placeholder='hello@gamil.com' />
      <input className='outline-0 border-b  focus:outline-none ' {...register("pass")} type="password" placeholder='password' />
      <button>submit</button>
    </form>
  )
}

export default Login