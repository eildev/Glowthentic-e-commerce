import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const OnlineChatButton = () => {
    return (
        <div>
            <button className="flex border p-2 m-1 fixed gap-2 right-0 bottom-[150px] bg-secondary text-white">
                            <span className="font-bold">
                            <Icon icon="mdi-light:message-text" width="24" height="24" />
                            </span>
                            <span>Online Chat</span>
                        </button>
        </div>
    );
};

export default OnlineChatButton;