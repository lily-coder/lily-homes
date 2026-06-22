"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      animate={
        prefersReduced
          ? undefined
          : {
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(37, 211, 102, 0.7)",
                "0 0 0 15px rgba(37, 211, 102, 0)",
                "0 0 0 0 rgba(37, 211, 102, 0)",
              ],
            }
      }
      transition={
        prefersReduced
          ? undefined
          : { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
      whileHover={{ filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.406.835 2.884 1.262 4.405 1.263 5.344 0 9.693-4.348 9.695-9.691.001-2.59-1.011-5.025-2.847-6.865-1.838-1.837-4.271-2.849-6.866-2.849-5.344 0-9.693 4.349-9.695 9.691-.001 1.708.445 3.378 1.292 4.847l-.992 3.619 3.708-.974zm11.455-6.531c-.3-.149-1.774-.875-2.048-.976-.276-.1-.476-.149-.675.15-.2.299-.775.976-.95 1.174-.175.199-.349.224-.649.075-.299-.149-1.263-.465-2.403-1.485-.888-.792-1.487-1.771-1.662-2.07-.175-.299-.019-.461.13-.61.134-.133.299-.349.449-.524.15-.175.2-.299.299-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.51-.675-.518-.175-.009-.375-.01-.574-.01-.2 0-.525.075-.799.374-.275.3-.1.724-.1 1.199 0 .475.349 1.474.399 1.549.05.075.685 1.047 1.659 1.468 2.317.999 2.317.666 2.742.625.424-.041 1.373-.562 1.573-1.124.199-.562.199-1.048.149-1.149-.05-.1-.199-.15-.499-.299z" />
      </svg>
    </motion.a>
  );
}
