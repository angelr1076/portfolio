export default function Contact() {
  function handleSubmit(e) {
    // send form data and all fields to email
    // https://www.emailjs.com/docs/examples/reactjs/
    // https://www.emailjs.com/docs/sdk/send/
    // https://www.emailjs.com/docs/sdk/installation/
    // https://www.emailjs.com/docs/sdk/send-form/

    // prevent page refresh
    e.preventDefault();
    
    // clear form
    e.target.reset();

  }

  return (
    <section id='contact' className='contact'>
      <h2 className='page-header'>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' />
        <input placeholder='Email' />
        <textarea placeholder='Message' rows='8'/>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}
