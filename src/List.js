import React, { useState } from 'react'
//import ProductApi from './productApi'
import ProductApi from './ProductApi';
import { Link } from 'react-router-dom';

const List = () => {
  const [data, setData] = useState(ProductApi);
  //const filterResult=(catItem)=>{
  //const result=ProductApi.filter((cruData)=>{
  //return cruData.category===catItem;
  //})
  //setData(result)
  //}

  return (
    <>
      <div>
        <h1>hello</h1>
        <button className='btn btn-warning w-100 mb-4' >Men's clothing</button>
        <button className='btn btn-warning w-100 mb-4'>Jewelery</button>
        <button className='btn btn-warning w-100 mb-4' >Electronics</button>
        <button className='btn btn-warning w-100 mb-4' >Women's clothing</button>
  <button className='btn btn-warning w-100 mb-4' >All</button>

      </div>

      <div>
        <div className="container my-4">
          <h3 style={{ textAlign: 'center' }}>Lowest Prices
            Best Quality Shopping</h3>
          <div className="row">
            {
              data.map((product) => {

                const { id, title, price, image } = product;
                return (
                  <div className="card" key={id} style={{ width: "19rem", height: "26rem", margin: '25px', cursor: "pointer", textAlign: "center" }}>
                    <img src={image} height={220} width={250} className="card-img-top" alt='' />

                    <div className="card-body">
                      <h7 className="card-title">{title}</h7>
                      <h3 className="card-text">$-{price}</h3>
                      <i className="fas fa-star" style={{ margin: "2px" }} /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />

                      <Link to='' target='blank' className="btn btn-primary"  >by now</Link>
                    </div>
                  </div>

                )
              })
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default List
