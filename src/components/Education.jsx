import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function Education() {

  return (
    <FadeInSection>
      <section className="p-6 bg-white text-black dark:bg-gray-900 dark:text-white py-6 text-left shadow-md rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p className="mb-2">
          <strong>Bachelor of Science in Computer Science</strong>, California State University, Northridge (2023)
          <br />
          GPA: 3.26
        </p>
        <p className="mb-2">
          <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Database Systems, Web Development, Software Engineering
        </p>
        <p>
          <strong>Tripper Project:</strong> Developed a full-stack web application using React and Node.js to manage trip itineraries.
        </p>
      </section>
      </FadeInSection>
    
  );
}
