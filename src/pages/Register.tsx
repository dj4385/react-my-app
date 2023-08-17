import { ChangeEvent } from "react";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import { RiLoginCircleFill } from "react-icons/ri";
import { auth } from "../firebaseSetup";
import { useForm } from "react-hook-form";
import { IRegister } from "../models/IRegister";
import { useNavigate } from "react-router-dom";
import { LocalStorageService } from "../services/LocalStorage";
import { STORAGEENUM } from "../models/enums";
import { NotifierService } from "../services/Notifier";

const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, getValues, formState: {
        errors
    } } = useForm<IRegister>()

    const registerSubmit = async (data: IRegister) => {
        try {
            const firebaseUser = await auth.createUserWithEmailAndPassword(data.email, data.password);
            const result: firebase.default.auth.IdTokenResult | any = await firebaseUser.user?.getIdTokenResult();
            const { token, claims: {
                user_id, email, exp
            } } = result;
            LocalStorageService.setItem(STORAGEENUM.token, token);
            LocalStorageService.setItem(STORAGEENUM.user, JSON.stringify({email, exp, user_id}));
            NotifierService.showSuccess({
                message: 'Register Successfully',
                duration: 1000
            });
            navigate('/dashboard');
        } catch (error) {
            NotifierService.showError({
                message: 'Unable to register'
            })
        }
    }

    return (
        <div className="container h-[100vh] flex flex-col items-center justify-center">
            <div className="flex flex-col my-auto border border-gray2 rounded-lg w-[100%] max-w-[550px] justify-center items-center shadow-md bg-gray2">
                <h1 className="text-white text-center text-4xl my-3">Register</h1>
                <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit(registerSubmit)}>
                    <div className="py-2 px-5 w-full">
                        <InputGroup
                            inputLabel="Email Address"
                            placeholder="Enter email address"
                            type="email"
                            other={{
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email required"
                                    }
                                })
                            }}
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
                            placeholder="Enter Password"
                            id="password"
                            type="password"
                            other={{
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 8 characters long!'
                                    }

                                })
                            }}
                        />
                        {
                            errors.password?.message ? <p className="text-red">
                                {errors.password?.message}
                            </p> : null
                        }
                    </div>
                    <div className="py-2 px-5 w-full ">
                        <InputGroup
                            inputLabel="Confirm Password"
                            placeholder="Re-Enter Password"
                            type="password"
                            other={{
                                ...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 8 characters long!'
                                    },
                                    validate: {
                                        checkPassword: (fieldValue) => {
                                            const password = getValues('password');
                                            return password === fieldValue || "Password should be same"
                                        }
                                    }
                                })
                            }}
                        />
                        {
                            errors.confirmPassword?.message ? <p className="text-red">
                                {errors.confirmPassword?.message}
                            </p> : null
                        }
                    </div>
                    <div className="py-2 px-5 w-full">
                        <Button
                            type="submit"
                            label="Register"
                            icon={<RiLoginCircleFill />}
                        />
                    </div>
                    
                </form>
                <p className="text-white mb-10 cursor-pointer">
                    Already Registered {" "} <span className="text-primary" onClick={() => navigate('/')}> Please Login </span>
                </p>
            </div>
            
        </div>
    );
}

export default Register;
