'use client'
import React from 'react'
import DigitalClock from './DigitalClock'
import Click from '../ui/Click'
import { ApiContext } from '@/store/apiContext'

const ClockIn: React.FC = () => {
  const apiCtx = React.useContext(ApiContext)

  const submitHandler = async (e: any) => {
    apiCtx.createClockInRecord({
      startDatetime: new Date().toISOString(),
    })
  }

  return (
    <>
      <div>
        <h2 className='p-2 text-sm'>Current Time</h2>
        <DigitalClock />
      </div>
      <div className='flex-1 max-w-2xl p-8 mx-auto mb-6 space-y-6'>
        <div className='max-w-lg mx-auto'>
          <Click
            color='primary'
            size='lg'
            type='button'
            className='w-full'
            onClick={submitHandler}
          >
            Clock In
          </Click>
        </div>
      </div>
    </>
  )
}
export default ClockIn
