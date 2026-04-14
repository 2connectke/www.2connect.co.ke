import { IconType } from "react-icons";

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
    return (
        <div className="bg-white p-10 sm:p-8 md:p-10 rounded-[22px] text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_30px_70px_rgba(211,175,55,0.35)] group">
            <Icon className="text-5xl text-[#D3AF37] mb-5 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl sm:text-lg md:text-[1.3rem] font-bold mb-4 text-[#0a3d62]">
                {title}
            </h3>
            <p className="text-sm sm:text-[0.9rem] md:text-[0.95rem] leading-relaxed text-[#555]">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
