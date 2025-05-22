import {CheckCircledIcon} from "@radix-ui/react-icons"

interface FormSuccessProps {
    message: string | null;
}

const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className="flex items-center space-x-2 text-green-600">
            <CheckCircledIcon className="h-5 w-5" />
            <span>{message}</span>
        </div>
    );
};

export default FormSuccess;
