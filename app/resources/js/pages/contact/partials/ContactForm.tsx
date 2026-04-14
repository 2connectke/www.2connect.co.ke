// Contact/partials/ContactForm.tsx
import React, { useState } from 'react';
import FormField from './FormField';
import { Send, CheckCircle } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
}

const ContactForm = () => {
    const [formType, setFormType] = useState("general");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log({ formType, ...formData });
        setIsSuccess(true);
        setIsSubmitting(false);

        // Reset after showing success
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                organization: "",
                message: "",
            });
            setFormType("general");
            setIsSuccess(false);
        }, 3000);
    };

    const formTypeOptions = [
        { value: "general", label: "General Inquiry", description: "Questions about our programs" },
        { value: "volunteer", label: "Volunteer Application", description: "Join our team" },
        { value: "partner", label: "Partnership Proposal", description: "Collaborate with us" }
    ];

    if (isSuccess) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Send us a Message
                </h3>
                <p className="text-slate-600">
                    Fill out the form below and we'll respond as soon as possible.
                </p>
            </div>

            <div className="space-y-6">
                {/* Inquiry Type Selection - Card Style */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                        I am contacting you about
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {formTypeOptions.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => setFormType(option.value)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${formType === option.value
                                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                    }`}
                            >
                                <div className="font-semibold text-sm">{option.label}</div>
                                <div className="text-xs mt-1 opacity-80">{option.description}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                    />

                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 XXX XXX XXX"
                    />

                    {formType === "partner" && (
                        <FormField
                            label="Organization Name"
                            name="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            placeholder="Company/NGO Name"
                        />
                    )}
                </div>

                <FormField
                    label={
                        formType === "volunteer" ? "Skills & Interests" :
                            formType === "partner" ? "Partnership Proposal" :
                                "Your Message"
                    }
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={
                        formType === "volunteer" ? "Tell us about your skills and how you'd like to contribute..." :
                            formType === "partner" ? "Describe your organization and partnership idea..." :
                                "How can we help you?"
                    }
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
