import img from '../assets/images/coding.svg';

export default function Landing() {
  return (
    <section id='landing' className='landing'>
      <div className='landing__header'>
        <h1>Angel Rodriguez</h1>
        <h2>App Developer focused on scalable solutions and UI performance.</h2>
      </div>
      <div className='landing__img-container'>
        <img src={img} className='landing__img' />
      </div>
    </section>
  );
}
