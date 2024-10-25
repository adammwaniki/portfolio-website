import { useState, useEffect  } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';


const EmailCard = ({ onClose }) => {
  const [from, setFrom] = useState('');
  const [fromName, setFromName] = useState('');
  //const [cc, setCc] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const compiledMessage = `
  From: ${fromName} (${from})
  CC: ${{/*cc*/}}
  Subject: ${subject}
  
  Message:
  ${message}
    `;
  
    emailjs.send(
      'service_lemb9y2',
      'template_y01vnrl',
      {
        to_email: 'adamndegwa@protonmail.com',
        from_email: from,
        //cc_email: cc,
        subject: 'New message from your portfolio website',
        message: compiledMessage,
      },
      '-eI6FqIyAwQ91X7-J'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      onClose();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };
  

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div 
                className={`bg-[#FFFFF3] p-8 rounded-lg z-10 w-full max-w-md xxxxsm:h-[87vh] xl:h-[80vh] overflow-y-auto transform transition-all duration-300 ease-in-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
            <button 
                onClick={onClose} 
                className="float-right text-3xl w-10 h-10 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-400 text-white transition-colors duration-200"
                >
                &times;
                </button>
            <h2 className="text-2xl mb-4">Write a message or just say Hi!</h2>
            <form onSubmit={handleSubmit}>
              {/*<div className="mb-4">
                <label className="block mb-2">To:</label>
                <input type="text" value="Adam Mwaniki" readOnly className="w-full p-2 border rounded mb-2" />
                <input type="email" value="adamndegwa@protonmail.com" readOnly className="w-full p-2 border rounded" />
              </div>*/}
              <div className="mb-4">
                <label className="block mb-2">From:</label>
                <input 
                  type="text" 
                  value={fromName} 
                  onChange={(e) => setFromName(e.target.value)} 
                  placeholder="Your First and Last Name" 
                  required 
                  className="w-full p-2 border rounded mb-2" 
                />
                <input 
                  type="email" 
                  value={from} 
                  onChange={(e) => setFrom(e.target.value)} 
                  placeholder="Your Email Address" 
                  required 
                  className="w-full p-2 border rounded" 
                />
              </div>
                {/*<div className="mb-4">
                    <label className="block mb-2">Cc:</label>
                    <input type="email" value={cc} onChange={(e) => setCc(e.target.value)} className="w-full p-2 border rounded" />
                </div>*/}
                <div className="mb-4">
                    <label className="block mb-2">Subject:</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-2 border rounded h-32"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-[#FFFFF3] py-2 rounded-full">Send</button>
            </form>
      </div>
    </div>
  );
};

EmailCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EmailCard;
