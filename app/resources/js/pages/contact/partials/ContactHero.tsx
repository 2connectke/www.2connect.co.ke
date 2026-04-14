import HeroSection from "@/components/HeroSection";
import { Mail, Heart, Handshake } from "lucide-react";

const ContactHero = () => {
    return (
        <HeroSection
            title="Contact Us"
            subtitle="Have a question, want to volunteer, or interested in partnering with us? We'd love to hear from you."
            backgroundColor="from-[#0a192f] via-[#1e3a8a] to-[#1e90ff]"
            height="medium"
            animated={true}
            showBreadcrumb={true}
            breadcrumbItems={[
                { label: "Home", href: "/" },
                { label: "Contact", isActive: true }
            ]}
            showWatermark={true}
            watermarkText="Contact"
        >
            {/* Quick Action Pills */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mt-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-200 hover:bg-white/20 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                    <span>General Inquiry</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-200 hover:bg-white/20 transition-all duration-300">
                    <Heart className="w-4 h-4" />
                    <span>Volunteer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-slate-200 hover:bg-white/20 transition-all duration-300">
                    <Handshake className="w-4 h-4" />
                    <span>Partnership</span>
                </div>
            </div>
        </HeroSection>
    );
};

export default ContactHero;
