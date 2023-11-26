"use client"
import { Formik, Form, Field } from 'formik';
import Image from 'next/image';

interface MyFormValues {
  name: string
  email: string
  country: string
  message: string
}

const Contact = () => {
  const initialValues: MyFormValues = {
    name: '', 
    email: '',
    country: '',
    message: ''
  };
  return (
    <section  className='w-full flex flex-col space-section pt-20 pb-40 gap-12 bg-paper-texture relative overflow-hidden'>
      <div id='contacto' className='invisible absolute -top-20' ></div>
      <h5 className='title-size leading-10'>
          ¿Cómo podemos ayudarte?
      </h5>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className='flex flex-col  gap-4 items-start sm:w-full lg:w-5/6'>
        <div className='w-full flex gap-4 flex-wrap'>
          <div className='flex flex-col w-full sm:w-1/2 lg:w-2/5 gap-4'>
            <Field 
              id="name" 
              name="name" 
              placeholder="Nombre y apellido" 
              className="input"/>
            <Field 
              id="email" 
              type="email" 
              name="email" 
              placeholder="Correo electrónico" 
              className="input"/>
            <Field 
              id="country"
              name="country"
              placeholder="País"
              className="input" />
          </div>
          <Field 
            className="flex-1 input resize-none min-h-[180px]" 
            id="message" 
            name="message" 
            placeholder="Mensaje" 
            as="textarea" />
        </div>
        <button type="submit" className='self-start mt-4 btn-primary-sm'>
          Enviar
        </button>
        </Form>
      </Formik>
      <Image 
        src={'/papeles/papelMarron3.png'}
        alt='Papel marron contacto'
        width={200}
        height={200}
        className='absolute right-0 -bottom-4 w-1/4 sm:w-1/6 xl:w-[13%] h-auto'
      />
    </section>
  )
}

export default Contact