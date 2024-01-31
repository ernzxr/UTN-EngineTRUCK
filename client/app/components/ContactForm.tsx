import React from 'react'
import { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { getRandomValues } from 'crypto';


const initValues = {name: "", email: "", phone: "", comment: ""}

const initState = { values: initValues }; 

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange =  ({ target }: any) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
    
  }));
  

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    console.log(values);
    await sendContactForm(values);
  };


  return (
    <form className="w-full h-full gap-4 pl-6 ml-4 font-raleway">
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="name" value="Ingrese su Nombre" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="name" name="name" value={values.name} onChange={handleChange} type="text" sizing="sm" required/>
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="email" value="Ingrese su Correo Electronico" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="email" name="email" value={values.email} onChange={handleChange} type="email" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="phone" value="Ingrese su Numero" />
      </div>
      <div className='w-[70%]'>
      <TextInput id="phone" name="phone" value={values.phone} onChange={handleChange} type="text" sizing="sm" required />
      </div>
    </div>
    <div>
      <div className="mb-2 block mt-2">
        <Label htmlFor="comment" value="Comentarios" />
      </div>
      <div className='w-[70%]'>
      <Textarea id="comment" name="comment" value={values.comment} onChange={handleChange} placeholder="Deje un comentario..." required rows={5} className="resize-none" />
      </div>
    </div>
    <div className='mt-3'>
    <Button type="submit" onClick={onSubmit} className='bg-blue-800 bottom-1'>Enviar</Button>
    </div>
  </form>
  )
}

export default ContactForm