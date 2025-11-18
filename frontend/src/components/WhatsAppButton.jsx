import React from "react";

const WhatsAppButton = () => {
  // Using business-provided WhatsApp number (India): 9916964801
  const number = "919916964801"; // 91 + number, no symbols/spaces
  const message = encodeURIComponent(
    "Hi THE HooK, I’m reaching out from your website. I have a question / want to place an order."
  );
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.17 1.6 6L0 24l6.3-1.64a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.86-5.3 11.86-11.86a11.83 11.83 0 0 0-3.41-8.49zm-8.46 18.4h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.97 1-3.65-.24-.37a9.89 9.89 0 0 1-1.52-5.3c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.89-9.87 9.89zm5.42-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
