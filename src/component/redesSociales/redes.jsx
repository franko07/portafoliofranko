import { FaInstagram, FaFacebook } from 'react-icons/fa';




const MiPagina = () => {
    const URLINTG = 'https://www.instagram.com/tahamy.campestre/?hl=es'; // Reemplaza con la URL de tu página de Instagram
    const URLFACE = "https://www.facebook.com/tahamycampestre";
  
    return (
      <div class="fixed bottom-20 right-4 z-50">
        <div className="block justify-center p-5 my-5">
          <a
            href={URLINTG}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white bg-orange-500 rounded-full w-20 h-20 shadow-md transition-all duration-500 ease-in-out hover:bg-orange-400"
          >
            <FaInstagram size={50} />
          </a>
          <a
            href={`${URLFACE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white bg-blue-500 rounded-full w-20 h-20 shadow-md transition-all duration-500 ease-in-out hover:bg-blue-400"
          >
            <FaFacebook size={50} />
          </a>
        </div>
      </div>
    );
  };
  
  export default MiPagina;