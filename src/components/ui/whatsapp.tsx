import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 right-0 z-50 overflow-hidden flex items-center">
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex py-2 items-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white transition-all duration-300 ease-in-out ${
          isExpanded ? "pr-4 pl-3 rounded-full" : "pr-0 pl-3 rounded-l-full"
        } ""`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(true)}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
        {isExpanded && (
          <span className="ml-2 whitespace-nowrap text-sm font-medium">
            Chat with us
          </span>
        )}
      </a>

      {/* Hidden half by default */}
      <div className="w-1/2 h-full bg-gray-100"></div>
    </div>
  );
};

export default WhatsAppButton;
