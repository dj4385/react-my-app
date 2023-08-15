import { IInputGroup } from "../models/components/IInputGroup";

const InputGroup = ({
    inputLabel,
    id,
    type,
    placeholder,
    onChange,
    isDisabled,
    value,
    name,
    other
}: IInputGroup) => {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {inputLabel}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                disabled={isDisabled}
                name={name}
                value={value}
                {...other}
            />
        </>
    );
}

export default InputGroup;