import { Send, Youtube } from 'lucide-react';

const SocialMediaLinks = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://t.me/drevesnes"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0088cc] hover:bg-[#0077b3] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Telegram"
      >
        <Send size={24} />
      </a>
      
      <a
        href="https://vk.com/drevesnes"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0077FF] hover:bg-[#0066dd] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="VK"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.56h-1.5c-.45 0-.58-.36-1.38-1.16-.7-.69-1.01-.78-1.18-.78-.24 0-.31.07-.31.41v1.06c0 .29-.09.46-1.04.46-1.56 0-3.29-.95-4.51-2.72-1.83-2.53-2.33-4.44-2.33-4.83 0-.17.07-.33.41-.33h1.5c.31 0 .42.14.54.47.6 1.73 1.6 3.25 2.01 3.25.16 0 .23-.07.23-.46v-1.77c-.06-.98-.58-1.06-.58-1.41 0-.14.11-.27.29-.27h2.36c.26 0 .35.14.35.44v2.39c0 .26.11.35.19.35.16 0 .29-.09.58-.38 1.07-1.21 1.84-3.08 1.84-3.08.1-.2.24-.33.55-.33h1.5c.36 0 .44.18.36.44-.15.68-1.56 2.79-1.56 2.79-.13.21-.18.3 0 .54.13.18.56.55.85.88.53.6 1.26 1.34 1.41 1.76.07.43-.09.65-.52.65z"/>
        </svg>
      </a>
      
      <div
        className="bg-gray-400 text-white p-3 rounded-full shadow-lg cursor-not-allowed opacity-60"
        title="В процессе создания"
        aria-label="YouTube (в процессе создания)"
      >
        <Youtube size={24} />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
