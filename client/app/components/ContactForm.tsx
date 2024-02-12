import React from 'react'
import { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { getRandomValues } from 'crypto';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const sendMail = async (e: any) => {
    e.preventDefault();
    window.location.reload();
  
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        comment
      })
    })
  }

  
  return (
    <form onSubmit={sendMail} className="w-full h-full gap-4 pl-6 ml-4 font-raleway">
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="name" value="Ingrese su Nombre" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="name" name="name" value={name} onChange={(e) => {
        setName(e.target.value)
      }}  type="text" sizing="sm" required/>
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="email" value="Ingrese su Correo Electronico" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="email" name="email"value={email} onChange={(e) => {
        setEmail(e.target.value)
      }} type="email" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="phone" value="Ingrese su Numero" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="phone" name="phone" value={phone} onChange={(e) => {
        setPhone(e.target.value)
      }} type="text" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="comment" value="Comentarios" />
      </div>
      <div className='w-[70%]'>
      <Textarea id="comment" name="comment" value={comment} onChange={(e) => {
        setComment(e.target.value)
      }}  placeholder="Deje un comentario..." required rows={5} className="resize-none" />
      </div>
    </div>
    <div className='mt-3'>
    <Button type="submit" className='bg-blue-800 bottom-1'>Enviar</Button>
    </div>
  </form>
  )
}

export default ContactForm