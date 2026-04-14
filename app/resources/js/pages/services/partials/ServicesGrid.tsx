import {
    FaHandsHelping,
    FaHeartbeat,
    FaCertificate,
    FaUniversity,
    FaUsers,
    FaGlobeAfrica,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
    const services = [
        {
            icon: FaHandsHelping,
            title: "Volunteer Matching Platform",
            description: "AI-powered matching connects volunteers to opportunities aligned with their skills, passions, and availability — making impact easy."
        },
        {
            icon: FaHeartbeat,
            title: "Connect+ Wellness",
            description: "Access free mental wellness resources, peer support, and safe spaces designed specifically for youth and volunteers."
        },
        {
            icon: FaCertificate,
            title: "Volunteer Training Academy",
            description: "Develop leadership, project management and community engagement skills through structured training programs."
        },
        {
            icon: FaUniversity,
            title: "Internships / Attachments",
            description: "Start or lead a 2Connect club on your campus and mobilize students to drive positive change."
        },
        {
            icon: FaUsers,
            title: "NGO & Community Partnerships",
            description: "We collaborate with NGOs and grassroots organizations to amplify impact through volunteer deployment and project support."
        },
        {
            icon: FaGlobeAfrica,
            title: "Impact Campaigns",
            description: "Community clean-ups, awareness drives, and youth-led campaigns tackling real social and environmental challenges."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0a3d62] mb-12 sm:mb-16">
                What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
