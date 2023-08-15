import img from '../assets/images/dev.svg'

export default function Landing() {

  return (
    <section className='landing'>
      <div>
        <h1>Angel Rodriguez</h1>
        <h2>App Developer</h2>
      </div>
      <div>
        <img src={img} />
      </div>
    </section>
  );
}
