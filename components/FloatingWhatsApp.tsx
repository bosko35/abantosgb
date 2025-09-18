const whatsappHref = 'https://wa.me/905428017857'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] md:bottom-6 md:right-6"
      aria-label="WhatsApp üzerinden 0542 801 78 57 numarasına ulaşın"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M12.04 2a9.96 9.96 0 0 0-8.5 15.18L2 22l4.97-1.52A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.08 8.08 0 0 1-4.1-1.12l-.3-.18-2.95.9.95-2.87-.2-.3a8.1 8.1 0 1 1 6.6 3.57Zm4.43-5.99c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12-.64.8-.8.96-.29.18-.53.06a6.57 6.57 0 0 1-1.94-1.2 7.2 7.2 0 0 1-1.34-1.68c-.14-.24 0-.37.1-.5s.24-.3.36-.47c.12-.17.18-.28.27-.47s.04-.36-.02-.5c-.06-.12-.56-1.34-.77-1.84s-.41-.42-.56-.43h-.48c-.12 0-.5.07-.76.37s-1 1-1 2.43 1.02 2.82 1.16 3c.14.18 2 3.05 4.85 4.18.68.29 1.22.46 1.64.59.69.22 1.32.19 1.82.12.55-.08 1.45-.59 1.66-1.17.21-.58.21-1.08.15-1.17-.06-.09-.22-.14-.46-.26Z"
        />
      </svg>
    </a>
  )
}

