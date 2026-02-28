import React from 'react';

// Using simplified filenames
import logo1 from '../../assets/logos/logo1.svg';
import logo2 from '../../assets/logos/logo2.svg';
import logo3 from '../../assets/logos/logo3.svg';
import logo4 from '../../assets/logos/logo4.svg';
import logo5 from '../../assets/logos/logo5.svg';
import logo6 from '../../assets/logos/logo6.svg';
import logo7 from '../../assets/logos/logo7.svg';
import logo8 from '../../assets/logos/logo8.svg';
import logo9 from '../../assets/logos/logo9.svg';

export default function TrustedBy() {
    const logos = [
        { name: 'Accenture', src: logo1 },
        { name: 'Oracle', src: logo2 },
        { name: 'Goldman Sachs', src: logo3 },
        { name: 'Mastercard', src: logo4 },
        { name: 'Atlassian', src: logo5 },
        { name: 'Salesforce', src: logo6 },
        { name: 'Stripe', src: logo7 },
        { name: 'Microsoft', src: logo8 },
        { name: 'Google', src: logo9 },
    ];

    // Triple the array for a long, seamless scroll
    const scrollingLogos = [...logos, ...logos, ...logos];

    return (
        <section className="relative py-16 bg-[#2d333f] overflow-hidden border-y border-white/5">
            {/* Dark inner shadows Top/Bottom */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#1a1f36]/20 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#1a1f36]/20 to-transparent pointer-events-none z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-0">
                <div className="text-center mb-10">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] opacity-80 mb-2">
                        Strategic Partners
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-['Outfit',sans-serif]">
                        Trusted by Strategic Teams Worldwide
                    </h2>
                </div>

                <div className="relative mt-4">
                    {/* Stronger edge fades matching dark background */}
                    <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#2d333f] via-[#2d333f]/90 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#2d333f] via-[#2d333f]/90 to-transparent z-10" />

                    <div className="flex overflow-hidden whitespace-nowrap">
                        {/* 
                            Using w-max to ensure the container is as wide as its content.
                            The marquee animation translates -50%, so it works perfectly with repeated sets.
                        */}
                        <div className="flex items-center gap-12 md:gap-24 animate-marquee py-6 w-max">
                            {scrollingLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-10 md:h-14 w-auto min-w-[120px] object-contain grayscale brightness-0 invert"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
