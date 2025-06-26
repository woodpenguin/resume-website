import FadeInSection from "./FadeInSection"

export default function Certs() {
  return (
    <FadeInSection delay={0.2}>
      <section className="p-6 bg-white-900 text-black dark:bg-gray-900 dark:text-white py-6 text-left shadow-md rounded-md my-6">
        <h2 className="text-2xl font-bold mb-2">Certificates</h2>
        <p>
          AWS Certified Cloud Practitioner (2023) - Demonstrates foundational cloud knowledge and AWS services understanding.
        </p>
      </section>
    </FadeInSection>
  );
}