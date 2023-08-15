export default function Contact() {
  function handleSubmit(e) {
    // send form data
    e.preventDefault();
    
    // clear form
    e.target.reset();

  }

  return (
    <section className='contact'>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder='Name' />
        <input placeholder='Email' />
        <textarea placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}
