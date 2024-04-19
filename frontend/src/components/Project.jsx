import React from 'react'
import CheckList from './CheckList'
import  SearchProject  from './SearchProject'

const Project = () => {
  return (
    <div>
        <div className='text-2xl font-semibold p-10 '>
        Project: Business Document for Olobby Software Project
        </div>
        <div className='flex justify-between'>
        <CheckList/>
        <SearchProject/>
        </div>
    </div>
)
}

export default Project