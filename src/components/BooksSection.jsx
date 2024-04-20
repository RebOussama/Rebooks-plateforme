import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import CardBook from './CardBook'
import { Link } from 'react-router-dom';

const BooksSection = ({title,books}) => {
  return (
    <div className='my-16'>
      <div className='flex justify-between my-8'>
        <h1 className='text-4xl font-bold ml-12'>{title}</h1>
        <div className="Categories text-[#5B7483] text-lg font-bold flex items-center gap-1 mr-20">
            Categories
            <TiArrowSortedDown className='text-2xl'/>
        </div>
      </div>
      <div className='flex justify-center flex-wrap gap-8'>
{/* {(books.reverse()).map((item)=>{
    return(
        item.categorie===title ? <CardBook/>:""
    )
})} */}
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       <CardBook title={title}/>
       
      </div>
      <div className='flex flex-col mt-8 mr-20 font-bold text-xl'>
        <Link className='self-end underline text-[#5B7483] tracking-wider'>Show More</Link>
      </div>
    </div>
  )
}

export default BooksSection
