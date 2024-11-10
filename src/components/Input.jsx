// import { useForm } from "";
// import useForm from 're'


function Input({type, id, registerVal, required, isError, emailError}) {
    // const { register, handleSubmit, formState: {errors}} = useForm();

    // const {register, handleSubmit, data, setData, errors} = useLang()
  
  
  
    return (
        // {...register(registerVal, required)}
      <input  className={`w-full rounded-md py-[10px] px-4 border outline-none focus:border-darkBlue  `} type={type} id={id} />
    )
  }
  
export default Input