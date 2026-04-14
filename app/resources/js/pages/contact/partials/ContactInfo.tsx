const ContactInfo = () => {
    return (
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#1a73e8]">
                Get in Touch
            </h3>
            <p className="text-base my-2 leading-relaxed text-[#333]">
                📧 2connectke@gmail.com
            </p>
            <p className="text-base my-2 leading-relaxed text-[#333]">
                📞 +254 111 646 177
            </p>
            <p className="text-base my-2 leading-relaxed text-[#333]">
                📍 Nairobi, Kenya
            </p>
        </div>
    );
};

export default ContactInfo;
