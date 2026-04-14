import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

export interface HeroSectionProps {
    // Basic content
    title: string | ReactNode;
    subtitle?: string;

    // Visual options
    backgroundImage?: string;
    backgroundImages?: string[]; // For slideshow
    currentSlide?: number; // For slideshow
    backgroundColor?: string;
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
    height?: 'small' | 'medium' | 'large' | 'full' | 'custom';
    customHeight?: string;

    // Effects
    showWatermark?: boolean;
    watermarkText?: string;
    showBreadcrumb?: boolean;
    breadcrumbItems?: BreadcrumbItem[];
    showOverlay?: boolean;
    overlayOpacity?: string;

    // Animation
    animated?: boolean;
    slideshow?: boolean;
    slideDuration?: number;
    onSlideChange?: (index: number) => void;

    // Additional elements
    overlay?: ReactNode;
    children?: ReactNode;

    // Custom classes
    className?: string;
    contentClassName?: string;
}

const heightMap = {
    small: 'h-[40vh] min-h-[300px]',
    medium: 'h-[50vh] min-h-[400px]',
    large: 'h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[500px]',
    full: 'h-screen',
    custom: ''
};

const HeroSection = ({
    title,
    subtitle,
    backgroundImage,
    backgroundImages,
    currentSlide = 0,
    backgroundColor = 'from-[#0a192f] via-[#1e3a8a] to-[#1e90ff]',
    gradientFrom,
    gradientVia,
    gradientTo,
    height = 'medium',
    customHeight = '',
    showWatermark = false,
    watermarkText = '',
    showBreadcrumb = false,
    breadcrumbItems = [],
    showOverlay = true,
    overlayOpacity = 'bg-black/40',
    animated = true,
    slideshow = false,
    overlay,
    children,
    className = '',
    contentClassName = ''
}: HeroSectionProps) => {

    // Build gradient classes
    const gradientClass = gradientFrom && gradientVia && gradientTo
        ? `bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`
        : `bg-gradient-to-br ${backgroundColor}`;

    // Build height class
    const heightClass = height === 'custom' ? customHeight : heightMap[height];

    // Build background style
    const backgroundStyle = slideshow && backgroundImages && backgroundImages[currentSlide]
        ? { backgroundImage: `url(${backgroundImages[currentSlide]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
        : backgroundImage
            ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
            : {};

    // Determine if we should use gradient or image
    const hasBackgroundImage = (slideshow && backgroundImages) || backgroundImage;
    const bgClasses = hasBackgroundImage ? '' : gradientClass;

    // Content wrapper animation
    const MotionWrapper = animated ? motion.div : 'div';
    const animationProps = animated ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    } : {};

    return (
        <section
            className={`relative flex items-center justify-center overflow-hidden ${heightClass} ${bgClasses} ${className}`}
            style={backgroundStyle}
        >
            {/* Background overlay for image backgrounds */}
            {hasBackgroundImage && showOverlay && (
                <div className={`absolute inset-0 ${overlayOpacity}`}></div>
            )}

            {/* Gradient overlay for image backgrounds if needed */}
            {hasBackgroundImage && !gradientClass && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
            )}

            {/* Decorative blobs for gradient backgrounds */}
            {!hasBackgroundImage && (
                <>
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D3AF37]/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>
                </>
            )}

            {/* Custom overlay */}
            {overlay}

            {/* Main content */}
            <div className={`relative z-10 text-center max-w-[900px] px-4 sm:px-6 md:px-8 text-white ${contentClassName}`}>
                <MotionWrapper {...animationProps}>
                    {/* Breadcrumb */}
                    {showBreadcrumb && breadcrumbItems.length > 0 && (
                        <div className="breadcrumb flex items-center justify-center gap-2 text-sm sm:text-base opacity-90 mb-4">
                            {breadcrumbItems.map((item, index) => (
                                <span key={index}>
                                    {item.href ? (
                                        <span
                                            onClick={() => router.visit(item.href!)}
                                            className="cursor-pointer hover:text-[#D3AF37] transition-colors duration-300"
                                        >
                                            {item.label}
                                        </span>
                                    ) : (
                                        <span className={item.isActive ? 'text-[#D3AF37]' : ''}>
                                            {item.label}
                                        </span>
                                    )}
                                    {index < breadcrumbItems.length - 1 && (
                                        <span className="dot mx-1">•</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95 max-w-[700px] mx-auto mt-4">
                            {subtitle}
                        </p>
                    )}

                    {/* Custom children */}
                    {children}
                </MotionWrapper>

                {/* Watermark */}
                {showWatermark && watermarkText && (
                    <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[10rem] md:text-[12rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
                        {watermarkText}
                    </h2>
                )}
            </div>

            {/* Bottom decorative line for gradient backgrounds */}
            {!hasBackgroundImage && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3AF37]/30 to-transparent"></div>
            )}
        </section>
    );
};

export default HeroSection;
