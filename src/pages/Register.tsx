import { ChangeEvent } from "react";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import { RiLoginCircleFill } from "react-icons/ri";

const Register = () => {

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {}

    return (
        <div className="container h-[100vh] flex flex-col items-center justify-center">
            <div className="flex flex-col my-auto border border-gray2 rounded-lg w-[100%] max-w-[550px] justify-center items-center shadow-md bg-gray2">
                <h1 className="text-white text-center text-4xl my-3">Register</h1>
                <form className="flex flex-col justify-center items-center w-full">
                    <div className="py-2 px-5 w-full">
                        <InputGroup
                            inputLabel="Full Name"
                            placeholder="Enter Full Name"
                            name="fullName"
                            id="fullName"
                            type="text"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="py-2 px-5 w-full">
                        <InputGroup
                            inputLabel="Email Address"
                            placeholder="Enter email address"
                            name="email"
                            id="email"
                            type="email"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="py-2 px-5 w-full ">
                        <InputGroup
                            inputLabel="Password"
                            placeholder="Enter Password"
                            name="password"
                            id="password"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="py-2 px-5 w-full ">
                        <InputGroup
                            inputLabel="Confirm Password"
                            placeholder="Re-Enter Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="py-2 px-5 w-full">
                        <Button
                            type="submit"
                            label="Register"
                            icon={<RiLoginCircleFill />}
                        />
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
}

export default Register;
