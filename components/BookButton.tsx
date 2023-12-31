import { CustomButton } from './Button';
import { BiLinkExternal } from '../lib/react-icons-imports';

const BookButton = () => {
  return (
    <CustomButton text={'Pedir cita'} href={'https://lookartbcn.booksy.com'} target={'_blank'}>
      <BiLinkExternal />
    </CustomButton>
  );
};

export default BookButton;
