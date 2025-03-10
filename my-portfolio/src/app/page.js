import Image from "next/image";
import Timeline from "@/components/Timeline";

export default function HomePage() {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.jpg"
          width={100}
          height={100}
          className="rounded-full"
          alt="Profile"
        />
        <div>
          <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Rakib Shahid
          </h2>
          <p>Full-Stack Developer</p>
        </div>
      </div>

      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8">
        Work Experience
      </h3>
      <Timeline />

      <a href="/resume.pdf" className="block mt-4 text-blue-500">
        Download Resume
      </a>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Timeline from "@/components/Timeline";

// export default function HomePage() {
//   return (
//     <div>
//       <div className="flex items-center space-x-4">
//         <div className="relative w-[100px] h-[100px] flex justify-center items-center">
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: "easeOut",
//             }}
//             className="absolute w-[110px] h-[110px] border-2 border-white rounded-full"
//           />

//           <Image
//             src="/profile.jpg"
//             width={100}
//             height={100}
//             className="rounded-full relative"
//             alt="Profile"
//           />
//         </div>

//         <div>
//           <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
//             Rakib Shahid
//           </h2>
//           <motion.div
//             initial={{ width: 0, opacity: 0 }}
//             animate={{ width: "110%", opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: "easeOut",
//             }}
//             className="border-b border-white mt-1"
//           />

//           <p>Full-Stack Developer</p>
//         </div>
//       </div>

//       <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8">
//         <motion.div
//           initial={{ x: -10, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{
//             duration: 0.6,
//             delay: 0.2,
//             ease: "easeOut",
//           }}
//         >
//           Work Experience
//         </motion.div>
//       </h3>
//       <Timeline />

//       <a href="/resume.pdf" className="block mt-4 text-blue-500">
//         View Resume
//       </a>
//     </div>
//   );
// }
