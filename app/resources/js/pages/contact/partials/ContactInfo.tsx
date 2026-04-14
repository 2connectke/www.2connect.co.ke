// Contact/partials/ContactInfo.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: Mail,
            label: "Email",
            value: "2connectke@gmail.com",
            href: "mailto:2connectke@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+254 111 646 177",
            href: "tel:+254111646177"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Nairobi, Kenya",
            href: "#"
        },
        {
            icon: Clock,
            label: "Hours",
            value: "Mon - Fri, 9AM - 5PM EAT",
            href: null
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Contact Information
            </h3>

            <div className="space-y-4">
                {contactDetails.map((item, index) => {
                    const Content = (
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                <item.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    {item.label}
                                </p>
                                <p className="text-slate-900 font-medium mt-0.5">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    );

                    return item.href ? (
                        <a
                            key={index}
                            href={item.href}
                            className="block hover:opacity-80 transition-opacity"
                        >
                            {Content}
                        </a>
                    ) : (
                        <div key={index}>{Content}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactInfo;
