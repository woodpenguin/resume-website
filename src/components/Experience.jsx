import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <FadeInSection delay={0.2}>
    <section className="p-6 bg-white text-black dark:bg-gray-900 dark:text-white py-6 text-left shadow-md rounded-md my-6">
      <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">SoCalGas</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2023 – May 2025</p>

        <div className="ml-4 mt-4 border-l-2 border-gray-300 dark:border-gray-600 pl-4">
          {/* Role 1 */}
          <div className="mb-4">
            <h4 className="font-semibold">Backend Developer</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Nov 2024 – May 2025</p>
            <ul className="list-disc list-inside">
              <li>Improved system performance using Java & Spring Boot.</li>
              <li>Increased test coverage to 90% with JUnit.</li>
              <li>Addressed bug fixes and implemented performance optimizations.</li>
              <li>Leveraged Splunk for log analysis and monitoring.</li>
              <li>Collaborated with DevOps for CI/CD pipeline enhancements.</li>
            </ul>
          </div>

          {/* Role 2 */}
          <div className="mb-4">
            <h4 className="font-semibold">Machine Learning Engineer</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2024 – Nov 2024</p>
            <ul className="list-disc list-inside">
              <li>Modified predictive models using Python & TensorFlow.</li>
              <li>Collaborated with cross-functional teams to integrate ML solutions.</li>
              <li>Leveraged AWS services for model deployment and scaling.</li>
              <li>Improved model accuracy by 15% through hyperparameter tuning.</li>
            </ul>
          </div>

          {/* Role 3 */}
          <div className="mb-4">
            <h4 className="font-semibold">Software Engineer</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2023 – Mar 2024</p>
            <ul className="list-disc list-inside">
              <li>Developed scripts for data processing and analysis.</li>
              <li>Automated data collection and preprocessing tasks.</li>
              <li>Utilized Python and SQL for data manipulation and analysis.</li>
              <li>Developed front-end components using React.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}
