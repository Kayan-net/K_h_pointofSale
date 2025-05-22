import {ExclamationTriangleIcon} from "@radix-ui/react-icons"

interface FormErrorProps {
    error: string | null;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
    if (!error) return null;

    return (
        <div className="flex items-center space-x-2 text-red-600">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span>{error}</span>
        </div>
    );
};

export default FormError;
