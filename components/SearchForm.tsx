import React from 'react'
import Form from "next/form"
import SerachFormReset from './SerachFormReset';

const SearchForm = ({query} :{query?: string}) => {

    

  return (
   <Form action='/' scroll={false} className='search-form'>
    <input
     name='query'
     defaultValue={query}
     placeholder='Search Startups'
     className='search-input'

    />
    <div className='flex gap-2'>
        {query && (
           <SerachFormReset/>
        )}

        <button type='submit' className='search-btn text-white'>
            S
        </button>
    </div>
   </Form>
  )
}

export default SearchForm
