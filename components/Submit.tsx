import { BiPaperPlane } from '../lib/react-icons-imports';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-secondary text-white rounded-md outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}>
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <span className='tracking-wide font-mulish font-bold	flex items-center gap-2 uppercase'>
          Enviar
          <BiPaperPlane className='text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </span>
      )}
    </button>
  );
}
