import type { ChangeEvent } from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    value: string;
    onChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    required?: boolean;
    placeholder?: string;
    autoComplete?: string;
}

/** Soft filled field with an animated sun underline on focus. */
const FormField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    required = false,
    placeholder = '',
    autoComplete,
}: FormFieldProps) => {
    const id = `contact-${name}`;
    const inputClasses =
        'peer block w-full rounded-t-2xl border-0 border-b-2 border-ink/10 bg-paper px-5 pt-3 pb-4 text-[1.05rem] text-ink placeholder:text-ink/35 transition-colors duration-300 outline-none hover:bg-sand/70 focus:border-transparent focus:bg-white';

    return (
        <div>
            <label htmlFor={id} className="block px-1 pb-2 text-sm font-semibold text-ink">
                {label}
                {required && (
                    <span className="ml-1 text-sun-deep" aria-hidden>
                        *
                    </span>
                )}
            </label>
            <div className="relative">
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        rows={5}
                        className={`${inputClasses} resize-none`}
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        className={inputClasses}
                    />
                )}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-sun transition-transform duration-500 ease-out-expo peer-focus:scale-x-100" />
            </div>
        </div>
    );
};

export default FormField;
