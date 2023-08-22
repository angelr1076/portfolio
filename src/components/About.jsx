import img from '../assets/images/bitmojime.png';

export default function About() {

  return (
    <section>
      <h2 className='page-header'>About Me</h2>
      <div className="about">
        <div className='bio-img'>
          <img src={img} />
        </div>
        <div className='bio-desc'>
          <p>Driven by a childhood curiosity to understand how things work, I&apos;ve always been passionate about dismantling and reassembling the world around me. As a classically trained chef, I sharpened my skills and learned the value of attention to detail, hard work, and team collaboration.</p>

          <p>Recognizing that my interests gravitated towards technology, I pivoted my career and took the plunge into a full-time web development bootcamp. This transformative experience taught me the power of rapid learning, resilience, and the importance of embracing new challenges.</p>

          <p>Today, as an app developer, I am proud to merge my passions for learning, problem-solving, and creating solutions that empower others to focus on their work without getting bogged down by inefficient processes. I&apos;m excited to continue growing in the tech industry and contribute my skills to develop meaningful products that make a difference in people&apos;s lives.</p>
        </div>
      </div>
    </section>
  );
}
