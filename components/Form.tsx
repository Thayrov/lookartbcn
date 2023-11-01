'use client';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from '@/components/Submit';

export const Form = () => {
  return (
    <form
      className='mt-10 flex flex-col dark:text-black'
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success('Email enviado exitosamente!');
      }}>
      <input
        className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        name='senderEmail'
        type='email'
        required
        maxLength={500}
        placeholder={'Tu email'}
      />
      <textarea
        className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        name='message'
        placeholder={'Tu mensaje'}
        required
        maxLength={5000}
      />
      <SubmitBtn />
    </form>
  );
};
