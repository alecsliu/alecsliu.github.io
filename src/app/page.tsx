import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to My Personal Space</h1>
          <p>This is my digital home - a place for my thoughts, projects, and passions.</p>
          <Link href="#contact" className="btn">Get in touch</Link>
        </div>
        <div className="hero-image">
          {/* Use Next.js Image component for better performance */}
          <Image 
            src="https://via.placeholder.com/400x300" 
            alt="Hero Image" 
            width={400}
            height={300}
          />
        </div>
      </section>

      <section id="professional" className="section">
        <h2>Professional Life</h2>
        <p>Here's where I'll share my professional journey, skills, and experiences.</p>
        <div className="projects">
          <div className="project-card">
            <Image src="https://via.placeholder.com/400x200" alt="Project 1" width={400} height={200} />
            <div className="project-content">
              <h3>Project One</h3>
              <p>Brief description of this impressive project.</p>
            </div>
          </div>
          <div className="project-card">
            <Image src="https://via.placeholder.com/400x200" alt="Project 2" width={400} height={200} />
            <div className="project-content">
              <h3>Project Two</h3>
              <p>Brief description of another awesome project.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="section">
        <h2>Hobbies & Interests</h2>
        <p>Beyond work, here's what keeps me curious and engaged.</p>
        {/* Content will go here */}
      </section>

      <section id="blog" className="section">
        <h2>Latest Thoughts</h2>
        <p>A collection of ideas, reflections, and learning experiences.</p>
        {/* Blog posts will go here */}
      </section>

      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <p>Interested in connecting? Here's how you can reach me.</p>
        {/* Contact form will go here */}
      </section>
    </>
  );
}