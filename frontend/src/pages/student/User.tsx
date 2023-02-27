import React from 'react'

type Props = {}

const User = (props: Props) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <video src="http://localhost:5000/courses/prisma.mp4" controls></video>
    </div>
  )
}

export default User