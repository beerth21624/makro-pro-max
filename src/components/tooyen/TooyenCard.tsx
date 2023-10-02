import React from 'react'

import { Progress } from 'flowbite-react';

//icons
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';

const TooyenCard = () => {
    return (
        <div
            className='bg-white rounded-md flex flex-col overflow-hidden'
        >
            <div
                className=' flex  items-center space-x-2 py-2 px-4'
            >
                <div className='bg-red-600 rounded-full w-2 h-2'></div>
                <div className='w-2/12'>
                    <img
                        src='https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2Fd2db431ba8f941cfb4ce0e52d0e32aa6&w=3840&q=75'
                        alt='makro pro max toeyen'
                    />
                </div>
                <div className='flex flex-col w-7/12'>
                    <p className='text-sm'>เอโร่ ปลาบดแช่แข็ง 1 กก.</p>
                    <p className='text-xs text-gray-600'>exp. 20/10/2021</p>

                </div>
                <div className='flex flex-col w-3/12'>
                    <p className='text-sm text-gray-600'>2/10</p>
                    <Progress
                        size={'sm'}
                        color="red"
                        progress={45}
                    />
                </div>

            </div>
            <div
                className='border-t-1 border-gray-200 px-4 py-2 text-sm text-gray-600'
            >
                <div></div>

            </div>
        </div>
    )
}

export default TooyenCard