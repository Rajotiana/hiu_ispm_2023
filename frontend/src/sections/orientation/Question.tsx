import { Radio } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react'

interface IProps {
 question:string;
 onCb:(value:number)=>void
}

const Question = ({question, onCb}: IProps) => {
  const [selectedValue, setSelectedValue] = useState(0);

  function handleChange(e:any){
    setSelectedValue(Number(e.target.value))
    onCb(Number(e.target.value))
  }

  return (
    <div className="p-2">
      <div className='flex-col  rounded-xl p-4 my-1 shadow-md'>
      <p className='text-neutral-700 p-2 w-full text-xl text-center pb-5'>{question}</p>
      <div className="radio flex justify-around items-center py-2">
        <p className='text-base text-red-500 p-2'>Less</p>
        <Radio
          checked={selectedValue === 1}
          onChange={handleChange}
          value={1}
          name="radio-buttons"
          inputProps={{ 'aria-label': '1' }}
        />
        <Radio
          checked={selectedValue === 2}
          onChange={handleChange}
          value={2}
          name="radio-buttons"
          inputProps={{ 'aria-label': '2' }}
        />
        <Radio
          checked={selectedValue === 3}
          onChange={handleChange}
          value={3}
          name="radio-buttons"
          inputProps={{ 'aria-label': '3' }}
        />
        <Radio
          checked={selectedValue === 4}
          onChange={handleChange}
          value={4}
          name="radio-buttons"
          inputProps={{ 'aria-label': '4' }}
        />
        <Radio
          checked={selectedValue === 5}
          onChange={handleChange}
          value={5}
          name="radio-buttons"
          inputProps={{ 'aria-label': '5' }}
        />
        <p className='text-base text-green-600 p-2'>A Lot</p>

      </div>
    </div>
    </div>
  )
}

export default Question