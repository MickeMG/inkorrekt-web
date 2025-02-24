import { FaFacebook, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Inkorrekt.nu Logo"
            width={300}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>

        <div className="grid gap-6">
          <a
            href="https://www.tradera.com/profile/items/6396540/inkorrekt-nu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaShoppingCart className="text-2xl" />
            <span>Aktuella auktioner på Tradera</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61573153291452"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaFacebook className="text-2xl" />
            <span>Följ oss på Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/inkorrekt.nu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaInstagram className="text-2xl" />
            <span>Följ oss på Instagram</span>
          </a>
        </div>
      </div>
    </main>
  );
}
