import React, { useEffect, useState } from 'react'
//import List from './List'

const App = () => {
  const [result, setResult] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setResult(json))
      .catch(err => console.log(err))

  },[])

  return (
    <div>
      <div className="container my-4">

        <div className="row">
        {result.map((d, index) => {
          return(

          <div className="card" style={{ width: "20rem", margin: '20px', height: '500px' }}>
            <img style={{ height: '250px', width: '240px', margin: "5px" }} key={index} src={d.image} className="card-img-top" alt="..." />
            <div className="card-body" >
              <h4 className="card-title" style={{ alignItems: "center" }}>{d.title}</h4>
              ⭐⭐⭐⭐⭐
              <h5 className="card-title" style={{ alignItems: "center" }}>{d.price}</h5>
              <p className="card-text" style={{ alignItems: "center" }}></p>
              {/*<Link to={`/products/${id}`} className="btn btn-primary">by now</Link>*/}
            </div>
          </div>
          )

        })}
      </div>
      </div>

    </div>
  )
}

export default App
