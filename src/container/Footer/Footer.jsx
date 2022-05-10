import React, { useState } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { BsMailbox } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import { Form, Input, Result } from 'antd';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { TextArea } = Input;
  const [state, handleSubmit] = useForm("xoqrdpkb");
  if (state.succeeded) {
    console.log('success')
    return (
      <Result
        status="success"
        title='Thanks for your message!'
      />
    );
  }

  const validateMessages = {
    types: {
      email: `is not a valid email!`
    }
  }

  return (
    <>
      <h2 className='head-text'> Chat with <span className="app__footer-heading">me</span> </h2>

      <div className="app__footer-cards">
        <div className='app__footer-card'>
          {/* <img src={images.email} alt="email"/> */}
          <BsMailbox />
          <a href="mailto:allenaxie1@gmail.com" className='p-text'>
            allenaxie1@gmail.com
          </a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: + 1 (123) 456-7890" className='p-text'>+ 1 (123) 456-7890</a>
        </div> */}
      </div>

      <Form
        name='contact-form'
        onFinish={handleSubmit}
        className="app__footer-form"
        wrapperCol={{
          xs: { span: 24 },
          md: {span: 20, offset: 2 },
          lg: { span: 18, offset: 3},
          xl: {span: 14, offset: 6},
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter a valid email address", type: 'email' }]}
        >
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            { required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={4} placeholder="Your message" />
        </Form.Item>
        <Form.Item
          wrapperCol={{ 
            xs: { span: 24, offset: 10 },
            md: { span: 24, offset: 11 }
          }}
        >
          <button type="submit" className='p-text'>
            Send Message
          </button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);