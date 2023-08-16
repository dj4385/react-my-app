import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import { RiLoginCircleFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../models/ILogin";
import { auth } from "../firebaseSetup";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ILogin>();

    const loginSubmit: SubmitHandler<ILogin> = async (data: ILogin) => {
        try {
            console.log(data);
            const firebaseUser = await auth.signInWithEmailAndPassword(data.email, data.password);
            console.log(firebaseUser.user?.getIdTokenResult())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container h-[100vh] flex flex-col items-center justify-center">
            <div className="flex flex-col my-auto border border-gray2 rounded-lg w-[100%] max-w-[550px] justify-center items-center shadow-md bg-gray2">
                <h1 className="text-white text-center text-4xl my-3">Login</h1>
                <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit(loginSubmit)}>
                    <div className="py-2 px-5 w-full">
                        <InputGroup
                            inputLabel="Email Address"
                            placeholder="Enter email address"
                            type="email"
                            other={{...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email address required'
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email address"
                                },
                                validate: {
                                    notAdmin: (fieldValue) => {
                                        return fieldValue !== 'dheeraj.sharma@ooldes.io' || "Enter a different email address"
                                    }
                                }
                            })}}
                            
                        />
                        {
                            errors.email?.message ? <p className="text-red">
                                {errors.email?.message}
                            </p> : null
                        }
                        
                    </div>
                    <div className="py-2 px-5 w-full ">
                        <InputGroup
                            inputLabel="Password"
                            placeholder="************"
                            type="password"
                            other={{...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                // minLength: {
                                //     value: 8,
                                //     message: 'Password must be at least 8 characters long!'
                                // }
                            })}}
                        />
                        {
                            errors.password?.message ? <p className="text-red">
                                {errors.password?.message}
                            </p> : null
                        }
                    </div>
                    <div className="py-2 px-5 w-full">
                        <Button
                            type="submit"
                            label="Login"
                            icon={<RiLoginCircleFill />}
                        />
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
}

export default Login;