import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Connect With Me
          </h2>
          <div className="text-center mt-10">
            <a
              href="https://www.linkedin.com/in/preet-jhagekar-a9a1aa290/" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Visit My LinkedIn
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
