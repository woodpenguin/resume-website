import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection delay={0.2}>
      <section className="p-6 bg-white text-black dark:bg-gray-900 dark:text-white py-6 text-left shadow-md rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          Detail-oriented Backend Developer with hands-on experience in building and optimizing high-performance backend services
          using Java and Spring Boot. Proven ability to enhance system reliability and reduce response times, backed by 90% test
          coverage and sharp debugging skills using Splunk. Agile team player who consistently contributes to timely sprint deliveries
          through active participation in Scrum ceremonies and a commitment to clean, test-driven development. Strategic and
          solutions-driven, adept in maintaining an agile and adaptable work approach.
        </p>
      </section>
    </FadeInSection>
  );
}