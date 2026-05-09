import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-brand text-beige flex items-center justify-center shadow-luxe hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} />
    </a>
  );
}
