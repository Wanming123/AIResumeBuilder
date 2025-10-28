import { BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Testimonial = () => {
  return (
    <div id="testimonials" className="flex flex-col items-center my-10-scroll-mt-12">
        <div className="flex items-center gap-2 text-sm text-indigo-800 bg-indigo-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
            <BookUserIcon className='size-4.5 stroke-indigo-600'/>
            <span>Testimonials</span>
        </div>
        <Title title="Don't just take our words" description="Hear what our users have to say about us. We're proud to have helped thousands of users land their dream jobs." />


    </div>
  )
}

export default Testimonial