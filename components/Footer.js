export default function Footer(){
  return (
    <footer className="border-t border-gray-200 bg-[#F2F2F2] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Instituto Piaget. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-700" aria-label="Facebook">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-700" aria-label="Instagram">IG</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-700" aria-label="X">X</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-700" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
