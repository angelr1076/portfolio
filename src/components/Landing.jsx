import img from '../assets/images/dev.svg'

export default function Landing() {

  return (
    <section id='landing' className='landing'>
      <div className='landing__header'>
        <h1>Angel Rodriguez</h1>
        <h2>App Developer</h2>
      </div>
      <div>
        <img src={img} className='landing__img'/>
      </div>
    </section>
  );
}
