export default function About() {
  const img = '../assets/images/bitmojime.png';
  return (
    <section id='about'>
      <div>
        <h2>About Me</h2>
        <p>My bio</p>
      <img src={img} />
      </div>
    </section>
  );
}
