'use client';
import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '../lib/importComponents';

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='black'
      className={`${
        id === open ? 'rotate-180' : ''
      } p-1 h-6 w-6 transition-transform bg-secondary rounded-full`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  );
}

export function CustomAccordion({
  data,
}: {
  data: { position: number; title: string; content: string }[];
}) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = ({ value }: { value: number }) => setOpen(open === value ? 0 : value);

  return (
    <>
      {data.map((d) => (
        <Accordion open={open === d.position} icon={<Icon id={d.position} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen({ value: d.position })}
            className='text-white text-2xl font-mulish font-bold hover:text-white px-4 border-b-[1px] border-gray-700'>
            {d.title}
          </AccordionHeader>
          <AccordionBody className='text-white text-lg font-mulish font-semibold px-4 whitespace-pre-line'>
            {d.content}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
