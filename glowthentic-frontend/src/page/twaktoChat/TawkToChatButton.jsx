import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './TawkToChatButton.css'
const TawkToChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Dynamically load the Tawk.to script when the component is mounted
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/659ec2450ff6374032be903f/1hjq2dvk7';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    script.onload = () => {
      // console.log("Tawk.to script loaded");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChatToggle = () => {
    if (typeof Tawk_API !== 'undefined') {
   
      setIsChatOpen(!isChatOpen); // Toggle chat state
    }
  };

  return (
    <button
      className="hidden rounded-lg lg:flex items-center border p-2 m-1 fixed right-0 bottom-[50px] bg-secondary text-white z-[10] group hover:gap-2 overflow-hidden"
      onClick={handleChatToggle}
    >
      <span className="font-bold p-[1.5px]">
        <Icon icon="mdi:message-text" width="24" height="24" />
      </span>
      <span className="whitespace-nowrap overflow-hidden max-w-0 transition-[max-width] duration-500 group-hover:max-w-[100px]">
        {isChatOpen ? 'Close Chat' : 'Online Chat'}
      </span>
    </button>
  );
};

export default TawkToChatButton;
