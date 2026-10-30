/** Shared look for every field in the matching form. */
export const fieldClasses =
    'mt-2 block w-full rounded-t-2xl border-0 border-b-2 border-ink/10 bg-paper px-5 pt-3 pb-4 text-[1.05rem] font-normal text-ink transition-colors duration-300 outline-none placeholder:text-ink/35 hover:bg-sand/70 focus:border-sun focus:bg-white';

interface SelectFieldProps {
    label: string;
    name: string;
    /** Text for the empty first option, which means "no preference". */
    anyLabel: string;
    options: string[];
}

/** Labelled dropdown whose first option leaves the preference open. */
const SelectField = ({ label, name, anyLabel, options }: SelectFieldProps) => (
    <label className="block text-sm font-semibold text-ink">
        {label}
        <select name={name} className={fieldClasses}>
            <option value="">{anyLabel}</option>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    </label>
);

export default SelectField;
