import React from 'react'
import {Fragment, useEffect, useState} from 'react'
import Productcard from '../Componenets/Productcard'
import { useSearchParams } from 'react-router-dom';

function SearchResult() {

    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        fetch("http://localhost:3000/product/search?keyword"+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])
  return (
 <Fragment>
        <h1 id="products_heading">Result Products</h1>

        <section id="products"style={{display:"flex"}} className="searchcontainer">
        {/* <div className="searchcard row"> */}
            {products.map(product =><Productcard product={product} />)} 
        {/* </div> */}
        </section>
    </Fragment>
  )
}

export default SearchResult