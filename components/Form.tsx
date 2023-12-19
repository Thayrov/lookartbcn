'use client';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from '@/components/Submit';
import { Input, Textarea } from '../lib/material-tailwind-components';

export const Form = () => {
  return (
    <form
      className='mt-10 flex flex-col dark:text-black gap-10 z-[1]'
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success('Email enviado exitosamente!');
      }}>
      <Input
        size='lg'
        labelProps={{
          className:
            'peer-focus:before:!rounded-none peer-focus:after:!rounded-none peer-focus:before:!border-secondary peer-focus:after:!border-secondary peer-focus:bg-white',
        }}
        variant='outlined'
        className='h-14 bg-white rounded-none border-none focus:!border-none focus:!rounded-none focus:text-black'
        name='nombre'
        type='text'
        required
        maxLength={500}
        label={'Nombre'}
      />
      <Input
        size='lg'
        labelProps={{
          className:
            'peer-focus:before:!rounded-none peer-focus:after:!rounded-none peer-focus:before:!border-secondary peer-focus:after:!border-secondary peer-focus:bg-white',
        }}
        variant='outlined'
        className='h-14 bg-white rounded-none border-none focus:!border-none focus:!rounded-none focus:text-black'
        name='senderEmail'
        type='email'
        required
        maxLength={500}
        label={'Correo electrónico'}
      />
      <Input
        size='lg'
        labelProps={{
          className:
            'peer-focus:before:!rounded-none peer-focus:after:!rounded-none peer-focus:before:!border-secondary peer-focus:after:!border-secondary peer-focus:bg-white',
        }}
        variant='outlined'
        className='h-14 bg-white rounded-none border-none focus:!border-none focus:!rounded-none focus:text-black'
        name='teléfono'
        type='tel'
        required
        maxLength={500}
        label={'Teléfono'}
      />
      <Textarea
        variant='outlined'
        size='lg'
        labelProps={{
          className:
            'peer-focus:before:!rounded-none peer-focus:after:!rounded-none peer-focus:before:!border-secondary peer-focus:after:!border-secondary peer-focus:bg-white',
        }}
        className='h-14 bg-white rounded-none border-none focus:!border-none focus:!rounded-none focus:text-black'
        name='message'
        label={'Mensaje'}
        maxLength={5000}
      />
      <SubmitBtn />
    </form>
  );
};
