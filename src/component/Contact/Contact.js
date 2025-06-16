import { useState } from 'react';
import contact1 from './contract.jpg';
import './Contact.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
emailjs.init('fXUG3VVPkCc28c3EE');

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      const templateParams = {
        from_name: data.fullname,
        from_phone: data.phone,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const response = await emailjs.send(
        'service_0ei7gmb',
        'template_4r9twmt',
        templateParams
      );

      console.log('EmailJS response:', response);
      setSendStatus('success');
      
      // Clear form
      setData({
        fullname: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            {/* Left Section */}
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='Nadim Shahriar' />
                </div>
                <div className='details'>
                  <h1>Nadim Shahriar Apurbo</h1>
                  <p>I am available for freelance work. Connect with me via my social media or call me directly.</p>
                  <p>Phone: +8801716909892</p>
                  <p>Email: nadimshahriarapurbo@gmail.com</p>
                  <span>FIND ME WITH </span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/nadim-shahriar-apurbo-9508692a9/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://www.facebook.com/ERROR.Hiii" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/nadim_shahriar_apurbo/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://github.com/nadim-shahriar-apurbo" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fa-brands fa-github'></i>
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='right box_shodow'>
              {sendStatus === 'success' && (
                <div className="alert success">
                  Message sent successfully!
                </div>
              )}
              {sendStatus === 'error' && (
                <div className="alert error">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <form onSubmit={formSubmit}>
                <input
                  type='text'
                  name='fullname'
                  placeholder='Your Full Name'
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Your Phone Number'
                  value={data.phone}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email Address'
                  value={data.email}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={data.subject}
                  onChange={InputEvent}
                />
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={data.message}
                  onChange={InputEvent}
                  required
                ></textarea>
                <button 
                  type='submit' 
                  className='btn_shadow'
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'SEND MESSAGE '}
                  {!isSending && <i className='fa fa-long-arrow-right'></i>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;