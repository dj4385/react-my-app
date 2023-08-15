import { IButton } from "../models/components/IButton";

const Button = ({
    label,
    type,
    icon,
    isLoading
}: IButton) => {
    return (
        <>
            <button type={type} className="bg-gray hover:bg-primary text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-5 w-full">
                {icon}
                <span className="ml-2">{label}</span>
            </button>
        </>
    );
}

export default Button;