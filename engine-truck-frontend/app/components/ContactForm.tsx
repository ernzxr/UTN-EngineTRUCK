import React from 'react'

import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const ContactForm = () => {
  return (
    <form className="w-full h-full gap-4 pl-6 ml-4">
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="name" value="Ingrese su Nombre" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="name" type="text" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="email" value="Ingrese su Correo Electronico" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="email" type="text" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="phone" value="Ingrese su Numero" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="phone" type="text" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="comment" value="Comentarios" />
      </div>
      <div className='w-[70%]'>
      <Textarea id="comment" placeholder="Deje un comentario..." required rows={5} className="resize-none" />
      </div>
    </div>
    <div className='mt-3'>
    <Button type="submit">Enviar</Button>
    </div>
  </form>
  )
}

export default ContactForm