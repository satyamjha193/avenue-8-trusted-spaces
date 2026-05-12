import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917893402341"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-40
        flex items-center gap-3
        rounded-full
        bg-[#25D366]
        px-5 py-4
        text-white
        shadow-xl
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
      "
    >
      <MessageCircle size={22} />

      <span className="hidden md:block text-sm font-medium whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}