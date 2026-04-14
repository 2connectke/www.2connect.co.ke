// Contact/partials/FormField.tsx (Updated styling)
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
    const baseInputClasses = `
        w-full mt-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl
        text-slate-900 placeholder:text-slate-400
        transition-all duration-200
        focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
        hover:border-slate-300
    `;

    return (
        <div>
            <label className="block text-sm font-semibold text-slate-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    rows={5}
                    className={`${baseInputClasses} resize-none`}
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
        </div>
    );
};

export default FormField;
