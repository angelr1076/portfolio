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
    const timeout = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timeout);
  }, []);
  return show ? (
    <div
      className='notification'
      style={{
        backgroundColor: isError ? '#f71b43' : '#00c49a',
        color: '#fff',
        padding: '8px 16px',
        marginBottom: '16px',
        borderRadius: '4px',
        textAlign: 'center',
      }}>
      {message}
    </div>
  ) : null;
}

function Contact({ showModal, onClose }) {
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (showModal) {
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);
    }
  }, [showModal]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!toSend.from_name || !toSend.reply_to || !toSend.message_html) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    send(serviceID, templateID, toSend, publicKey)
      .then(() => {
        setIsSent(true);
        setErrorMessage('');
        setToSend({ to_name, from_name: '', message_html: '', reply_to: '' });
      })
      .catch(err => {
        setErrorMessage(`Failed to send message: ${err.text}`);
        setIsSent(false);
      });
    e.target.reset();
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`modal-overlay ${showModal ? 'show' : ''}`}
      onClick={onClose}>
      <div
        className={`modal-content ${theme === 'light' ? 'light' : ''} ${
          animate ? 'enter' : ''
        }`}
        onClick={e => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          ×
        </button>
        <h2 className={`page-header page-header-${theme}`}>Email Me</h2>
        {isSent && <Notification message='Message sent!' isError={false} />}
        {errorMessage && <Notification message={errorMessage} isError={true} />}
        <form className='contact__form' onSubmit={handleSubmit}>
          <input type='hidden' name='to_name' value={to_name} />
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            required
            className={theme === 'light' ? 'contact__input--light' : ''}
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='reply_to'
            placeholder='Your email'
            required
            className={theme === 'light' ? 'contact__input--light' : ''}
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            name='message_html'
            placeholder='Your message'
            rows={8}
            required
            className={theme === 'light' ? 'contact__input--light' : ''}
            value={toSend.message_html}
            onChange={handleChange}
          />
          <button
            type='submit'
            className={`btn send${theme === 'light' ? ' light' : ''}`}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};

Contact.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

Contact.defaultProps = {
  showModal: false,
  onClose: () => {},
};

export default Contact;
