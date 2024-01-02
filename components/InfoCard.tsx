import { Card, CardBody, CardHeader } from '../lib/material-tailwind-components';
import { BiSolidPhoneCall, BiSolidEnvelope, BiSolidMap } from '../lib/react-icons-imports';

const iconMap: { [key: string]: any } = {
  BiSolidPhoneCall: BiSolidPhoneCall,
  BiSolidEnvelope: BiSolidEnvelope,
  BiSolidMap: BiSolidMap,
};

export function InfoCard() {
  const data = [
    {
      icon: 'BiSolidPhoneCall',
      content: (
        <>
          <a href='tel:645044485' className='cursor-pointer underline hover:text-gray-400'>
            645 044 485
          </a>
          <span> | </span>
          <a href='tel:931059346' className='cursor-pointer underline hover:text-gray-400'>
            931 059 346
          </a>
        </>
      ),
    },
    {
      icon: 'BiSolidMap',
      content: <>C/ de Ramon Turró, 69 Esquina, 08005 Barcelona, España</>,
    },
    {
      icon: 'BiSolidEnvelope',
      content: (
        <a
          href='mailto:lookartbcn@gmail.com'
          className='cursor-pointer underline hover:text-gray-400'>
          lookartbcn@gmail.com
        </a>
      ),
    },
  ];

  return (
    <>
      {data.map((d, index) => {
        const IconComponent = iconMap[d.icon];

        if (!IconComponent) {
          return null;
        }

        return (
          <div
            key={index}
            className='bg-primary w-full lg:w-1/3 h-[20rem] lg:h-[16rem] bg-opacity-80'>
            <Card className='relative bg-transparent border-none shadow-none flex flex-col '>
              <CardHeader className='relative w-full top-[3rem] lg:top-[2rem] bg-transparent border-none shadow-none m-0 p-0 flex'>
                <IconComponent className='text-white w-full h-28 self-center px-4' />
              </CardHeader>
              <CardBody className='w-full absolute inset-x-0 top-[12rem] lg:top-[8rem] bg-transparent border-none shadow-none'>
                <p className='text-white text-center font-mulish font-semibold text-base'>
                  {d.content}
                </p>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
/* import { DataInfo } from '@/lib/types';
import { Card, CardBody, CardHeader } from '../lib/material-tailwind-components';
import { BiSolidPhoneCall, BiSolidEnvelope, BiSolidMap } from '../lib/react-icons-imports';

const iconMap: { [key: string]: any } = {
  BiSolidPhoneCall: BiSolidPhoneCall,
  BiSolidEnvelope: BiSolidEnvelope,
  BiSolidMap: BiSolidMap,
};

export function InfoCard({ data }: { data: DataInfo[] }) {
  return (
    <>
      {data.map((d, index) => {
        const IconComponent = iconMap[d.icon];

        if (!IconComponent) {
          return null;
        }

        return (
          <div
            key={index}
            className='bg-primary w-full lg:w-1/3 h-[20rem] lg:h-[16rem] bg-opacity-80'>
            <Card className='relative bg-transparent border-none shadow-none flex flex-col '>
              <CardHeader className='relative w-full top-[3rem] lg:top-[2rem] bg-transparent border-none shadow-none m-0 p-0 flex'>
                <IconComponent className='text-white w-full h-28 self-center px-4' />
              </CardHeader>
              <CardBody className='w-full absolute inset-x-0 top-[12rem] lg:top-[8rem] bg-transparent border-none shadow-none'>
                <p className='text-white text-center font-mulish font-semibold text-base'>
                  {d.content}
                </p>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
 */
