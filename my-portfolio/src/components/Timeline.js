export default function Timeline() {
  const experiences = [
    { year: "2024", role: "Workshop Developer", company: "Code For All" },
    { year: "2023", role: "Computer Science Tutor", company: "Queens College" },
  ];

  return (
    <div className="border-l-2 border-gray-300 mt-4 pl-4">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold">
            {exp.role} - {exp.company}
          </h4>
          <p className="text-gray-500">{exp.year}</p>
        </div>
      ))}
    </div>
  );
}

// export default function Timeline() {
//   const experiences = [
//     {
//       time: "2024 - Present",
//       role: "Workshop Developer",
//       company: "Code For All",
//       description:
//         "Developed workshops for students to learn about web development.",
//     },
//     {
//       time: "2023 - Present",
//       role: "Computer Science Tutor",
//       company: "Queens College",
//       description: "Tutored students in computer science courses.",
//     },
//   ];

//   return (
//     <div className="border-l-2 border-gray-300 mt-4 pl-4">
//       {experiences.map((exp, index) => (
//         <div key={index} className="mb-4 grid grid-cols-3">
//           <h4 className="col-span-3">{exp.company}</h4>
//           <h4 className="col-span-2 scroll-m-20 text-xl font-semibold tracking-tight">
//             {exp.role}
//           </h4>
//           <p className="text-sky-300 col-span-1">{exp.time}</p>
//           <p className="mt-2 text-gray-400 col-span-2">{exp.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
