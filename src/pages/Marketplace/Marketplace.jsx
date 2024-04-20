import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSection from '../../components/HeaderSection'
import BooksSection from '../../components/BooksSection'

const Marketplace = () => {
  return (
    <div>
      <Header />

      
      <div className='my-24'>

        {/* Header Section */}
        <HeaderSection title="Marketplace" AddTitle="Add Book" AddLink="/Addbook" />

        {/* On Sale Section */}

        <BooksSection title="On Sale"/>

        {/* For Exchange Section */}


        <BooksSection title="For Exchange"/>
        


      </div>





      <Footer />
    </div>
  )
}

export default Marketplace
