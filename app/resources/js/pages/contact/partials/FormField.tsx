import React from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
}

const FormField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    required = false,
    placeholder = '',
    options = []
}: FormFieldProps) => {
    const baseInputClasses = "mt-2 p-3 px-4 border border-[#ccc] rounded-xl text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[#1a73e8] focus:shadow-[0_0_8px_rgba(26,115,232,0.2)]";

    return (
        <label className="flex flex-col font-medium text-[0.95rem] text-[#333]">
            {label}
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={`${baseInputClasses} resize-y min-h-[120px]`}
                />
            ) : type === 'select' ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={baseInputClasses}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={baseInputClasses}
                />
            )}
        </label>
    );
};

export default FormField;
