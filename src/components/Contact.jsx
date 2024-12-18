import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { useState, useRef } from 'react';
import emailjs  from '@emailjs/browser';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {

const formRef = useRef();
const [form, setForm] = useState({
  name: '',
  email: '',
  message: '',
});
const [Loading, setLoading] = useState(false);

const handleChange = (a) => {
const {name, value} = a.target;

setForm({...form, [name]: value})

}

const handleSubmit = (a) => {
a.preventDefault();
setLoading(true);

emailjs.send(
  'service_f2hw0zg',
  'template_8xi9sho',
  {
    from_name: form.name,
    to_name: 'Avan',
    from_email: form.email,
    to_email: 'avanpuri2005@gmail.com',
    message: form.message,
  },
  '-Yl4yaBUtjSRhEn6d'
)
 .then(()=>{
  setLoading(false);
  alert('Thank you! I will get back to you shortly')

  setForm({
  name: '',
  email: '',
  message: '',
  })
 }, (error)=>{
  setLoading(false)
  console.log(error);
  alert('Something went wrong.')
 })
}


  return (
    <div className ="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full max-w-3xl mx-auto">
      <div className="w-full max-w-3xl px-4">
      <p className ={styles.sectionSubText}>Get in Touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8 w-full max-w-3xl mx-auto"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label> 
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label> 
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
            rows="8"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {Loading ? 'Sending...' : 'Send'}
          </button> 
        </form>
        <div className="flex justify-center mt-8 gap-6">
          <a 
          href="https://github.com/AvanPuri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl"
          >
            <FaGithub/>
          </a>
          <a 
          href="https://www.instagram.com/_avanpuri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl"
          >
            <FaInstagram/>
          </a>
          <a 
          href="https://www.linkedin.com/in/avanpuri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl"
          >
            <FaLinkedin/>
          </a>
          <a 
          href="https://x.com/AvanChef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl"
          >
            <FaXTwitter/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")