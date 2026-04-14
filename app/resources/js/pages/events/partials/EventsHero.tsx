import HeroSection from "@/components/HeroSection";
import { Search, MapPin, Grid3X3 } from "lucide-react";

const EventsHero = () => {
    return (
        <div className="relative">
            <HeroSection
                title="Events"
                height="small"
                showWatermark={true}
                watermarkText="Events"
                showBreadcrumb={true}
                breadcrumbItems={[
                    { label: "Home", href: "/" },
                    { label: "Events", isActive: true }
                ]}
                backgroundColor="from-[#0a3d62] to-[#092f4a]"
            >
                {/* Search Bar */}
                <div className="mt-10 bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        {/* Search Event */}
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full md:w-auto">
                            <Search className="w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search Event"
                                className="w-full outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-10 bg-slate-200" />

                        {/* Search Location */}
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full md:w-auto border-t md:border-t-0 border-slate-100">
                            <MapPin className="w-5 h-5 text-slate-400" />
                            <select className="w-full outline-none text-slate-700 bg-transparent cursor-pointer appearance-none">
                                <option>Search Location</option>
                                <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Kisumu</option>
                                <option>Nakuru</option>
                            </select>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-10 bg-slate-200" />

                        {/* Category */}
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full md:w-auto border-t md:border-t-0 border-slate-100">
                            <Grid3X3 className="w-5 h-5 text-slate-400" />
                            <select className="w-full outline-none text-slate-700 bg-transparent cursor-pointer appearance-none">
                                <option>Category</option>
                                <option>Training</option>
                                <option>Conference</option>
                                <option>Workshop</option>
                                <option>Networking</option>
                                <option>Community Service</option>
                            </select>
                        </div>

                        {/* Search Button */}
                        <button className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white px-6 py-3 rounded-xl transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                            <Search className="w-5 h-5" />
                            <span className="md:hidden">Search</span>
                        </button>
                    </div>
                </div>
            </HeroSection>
        </div>
    );
};

export default EventsHero;
