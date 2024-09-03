import React from 'react'
import LeftTop from './Left-top'
import LeftBottom from './LeftBottom'

const Left = () => {
  return (
    <section>
        <div>
            <LeftTop/>
        </div>
        <div className='mt-8'>
            <LeftBottom/>
        </div>
    </section>
  )
}

export default Left