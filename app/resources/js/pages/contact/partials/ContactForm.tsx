import React, { useState } from 'react';
import FormField from './FormField';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
}

const ContactForm = () => {
    const [formType, setFormType] = useState("general");
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ formType, ...formData });
        alert("Thank you for reaching out to 2Connect! We'll get back to you soon.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            organization: "",
            message: "",
        });
        setFormType("general");
    };

    const formTypeOptions = [
        { value: "general", label: "General Inquiry" },
        { value: "volunteer", label: "Becoming a Volunteer" },
        { value: "partner", label: "Becoming a Partner" }
    ];

    return (
        <form className="flex-1 min-w-[450px] bg-white p-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex flex-col gap-4" onSubmit={handleSubmit}>
            <FormField
                label="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
            />

            <FormField
                label="I am contacting you about"
                name="formType"
                type="select"
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                options={formTypeOptions}
            />

            {/* Volunteer Fields */}
            {formType === "volunteer" && (
                <FormField
                    label="Skills / Interests"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how you'd like to contribute"
                    required
                />
            )}

            {/* Partner Fields */}
            {formType === "partner" && (
                <>
                    <FormField
                        label="Organization Name"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        label="Partnership Proposal"
                        name="message"
                        type="textarea"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your organization and partnership idea"
                        required
                    />
                </>
            )}

            {/* General Message */}
            {formType === "general" && (
                <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            )}

            <button
                type="submit"
                className="mt-4 py-3 px-6 bg-[#1a73e8] text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#155ab6] hover:-translate-y-0.5"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
