export default function FloatingButtons(){
  const phone='5215555555555'; const email='demo@piaget.edu.mx';
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      <a href={`https://wa.me/${phone}?text=Hola%20me%20gustaría%20información`} target="_blank" rel="noopener noreferrer"
         className="rounded-full shadow-lg p-3 bg-[#25D366] text-white hover:opacity-90" aria-label="WhatsApp" title="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6" fill="currentColor">
          <path d="M128 20c-57.4 0-104 45.9-104 102.5 0 18.1 4.9 35.5 14.1 50.8L20 236l63.9-17.3c13.9 7.6 29.6 11.6 45.9 11.6 57.4 0 104-45.9 104-102.5S185.4 20 128 20Zm0 187.7c-15.1 0-29.8-4-42.6-11.6l-3-1.8-37.9 10.3 10.2-36.9-2-3.1c-8.7-13.6-13.3-29.2-13.3-45.1C39.4 77.1 79.7 38 128 38s88.6 39.1 88.6 86.5-40.3 83.2-88.6 83.2Z"/>
          <path d="M183.2 147.9c-3.1-1.6-18.3-9.1-21.1-10.1-2.8-1-4.9-1.6-7 1.6-2.1 3.3-8.1 10.1-9.9 12.1-1.8 2-3.6 2.3-6.7.8-3.1-1.6-13-4.7-24.7-15-9.1-8-15.2-17.8-17-20.8-1.8-3-0.2-4.6 1.4-6.2 1.5-1.5 3.1-3.9 4.6-5.8 1.5-2 2.1-3.3 3.1-5.5 1-2.3 0.5-4.1-0.3-5.7-.8-1.6-7-16.9-9.5-23.1-2.5-6-5-5.1-7-5.2-1.8-0.1-4.1-0.1-6.4-0.1s-5.8.8-8.9 4.1c-3.1 3.3-11.7 11.4-11.7 27.9 0 16.5 12 32.5 13.6 34.8 1.6 2.3 23.6 37.4 57.2 51 8 3.4 14.3 5.4 19.2 6.9 8.1 2.6 15.4 2.2 21.2 1.4 6.5-1 18.3-7.5 21-14.7 2.6-7.2 2.6-13.5 1.8-14.8-.8-1.3-2.8-2-5.9-3.6Z"/>
        </svg>
      </a>
      <a href={`mailto:${email}?subject=Solicitud%20de%20información`} className="rounded-full shadow-lg p-3 bg-gray-900 text-white hover:opacity-90" aria-label="Correo" title="Correo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"/><path d="M22 6 12 13 2 6"/>
        </svg>
      </a>
    </div>
  );
}
