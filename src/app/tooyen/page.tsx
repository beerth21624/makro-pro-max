'use client'

import React from 'react'
import { Button } from 'flowbite-react'

//components
import TooyenCard from '@/components/tooyen/TooyenCard'



const page = () => {
    return (
        <div
            className='
       
            flex flex-col 
            my-4
            space-y-4
            '
        >
            <div className='bg-white rounded-md flex items-center justify-between p-4'>
                <p className='text-sm '><b>ตู้เย็นของฉัน (10)</b></p>
                <Button
                    gradientMonochrome='failure'
                    className='text-xs'
                >
                    เพิ่มรายการ
                </Button>

            </div>
            <TooyenCard />
            <TooyenCard />
            <TooyenCard />
            <TooyenCard />
            <TooyenCard />

        </div>
    )
}

export default page