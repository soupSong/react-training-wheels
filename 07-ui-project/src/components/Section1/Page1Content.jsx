import React from 'react'
import Page1LeftContent from './Page1LeftContent'
import Page1RightContent from './Page1RightContent'

const Page1Content = (props) => {

  
  return (
    <div className='pb-16 pt-6 h-[90vh] px-18 flex items-center gap-10'>

        <Page1LeftContent />

        <Page1RightContent users={props.users} />
      
    </div>
  )
}

export default Page1Content
