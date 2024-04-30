import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import { useTheme } from './ThemeContext';
import PropTypes from 'prop-types';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function Notification({ message, isError }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {show && (
        <div
          className='notification'
          style={{
            backgroundColor: isError ? '#ff3860' : '#43d55c',
            color: 'white',
            padding: '8px 16px',
            marginBottom: '16px',
            borderRadius: '4px',
            textAlign: 'center',
          }}>
          {message}
        </div>
      )}
    </>
  );
}

function Contact() {
  const { theme } = useTheme();
  const to_name = 'node@beachlife.email';
  const [toSend, setToSend] = useState({
    to_name,
    from_name: '',
    message_html: '',
    reply_to: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!toSend.from_name || !toSend.reply_to || !toSend.message_html) {
      console.log('Validation failed');
      setErrorMessage('Please fill out all fields');
      return;
    }

    send(serviceID, templateID, toSend, publicKey)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setErrorMessage('');
        // Clear form
        setToSend({
          from_name: '',
          message_html: '',
          reply_to: '',
        });
      })
      .catch(err => {
        console.log('FAILED...', err);
        setErrorMessage(
          `Failed to send message. Please try again later. ${err.text}`
        );
      });

    e.target.reset();
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id='contact' className='contact'>
      <h2 className={`page-header page-header-${theme}`}>Contact Me</h2>
      {isSent && (
        <Notification message='Message sent! Thank you!' isError={false} />
      )}
      {errorMessage && <Notification message={errorMessage} isError={true} />}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='to_name'
          id='to_name'
          placeholder='angelrod'
          value={to_name}
          disabled
          hidden
        />
        <input
          type='text'
          className={theme === 'light' ? 'contact__input--light' : ''}
          name='from_name'
          id='from_name'
          required
          placeholder='Your name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          className={theme === 'light' ? 'contact__input--light' : ''}
          name='reply_to'
          id='reply_to'
          required
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          name='message_html'
          id='message_html'
          className={theme === 'light' ? 'contact__input--light' : ''}
          placeholder='Your message'
          required
          rows={8}
          value={toSend.message_html}
          onChange={handleChange}
        />
        <button
          type='submit'
          className={`btn send${theme === 'light' ? ' light' : ''}`}>
          Send
        </button>
      </form>
    </section>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Contact;
