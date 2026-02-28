import React from 'react';

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
    const [expandedItem, setExpandedItem] = React.useState(null);

    const handleToggle = (label, e) => {
        e.preventDefault();
        setExpandedItem(expandedItem === label ? null : label);
    };

    return (
        <div
            className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out lg:hidden`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className="absolute right-0 h-full w-full max-w-sm bg-white shadow-xl flex flex-col p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="" className="h-8 w-8 object-contain rounded-md" />
                        <span className="text-xl font-bold text-gray-900">Stratify AI</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-900"
                        aria-label="Close menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex-grow">
                    <ul className="space-y-6">
                        {navLinks.map((link) => (
                            <li key={link.label} className="flex flex-col">
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            handleToggle(link.label, e);
                                        } else {
                                            onClose();
                                        }
                                    }}
                                    className="flex justify-between items-center text-lg font-semibold text-[#1a1f36] hover:text-indigo-600 transition-colors"
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <svg
                                            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${expandedItem === link.label ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Dropdown Items - Accordion */}
                                {link.hasDropdown && expandedItem === link.label && link.dropdownItems && (
                                    <ul className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-indigo-100 ml-2">
                                        {link.dropdownItems.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    onClick={onClose}
                                                    className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors block py-1"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-10 flex flex-col space-y-4 pb-4">
                    <a
                        href="#login"
                        onClick={onClose}
                        className="text-center font-semibold text-[#1a1f36] hover:text-indigo-600 py-2"
                    >
                        Log in
                    </a>
                    <button className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
