import Link from "next/link";
import { Doto } from "next/font/google";

const title_font = Doto({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className={`${title_font.className} text-3xl`}>
        <Link href="/">Rakib Shahid</Link>
      </h1>
      <div className="flex space-x-4">
        <Link
          href="/"
          //   className="font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/projects"
          //   className="font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Projects
        </Link>
        <a
          href="https://linkedin.com/in/rakib-shahid"
          //   className="font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          //   className="font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
          target="_blank"
        >
          Resume
        </a>
        <Link
          href="/blog"
          //   className="font-extrabold hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
