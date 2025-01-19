import { Icon } from "@iconify/react/dist/iconify.js";

const OnlineChatButton = () => {
  return (
    <button className="flex border p-2 m-1 fixed gap-2 right-0 bottom-[150px] bg-secondary text-white z-[100]">
      <span className="font-bold">
        <Icon icon="mdi-light:message-text" width="24" height="24" />
      </span>
      <span>Online Chat</span>
    </button>
  );
};

export default OnlineChatButton;
