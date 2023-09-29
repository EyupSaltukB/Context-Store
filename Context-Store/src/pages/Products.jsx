import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data));
  }, []);

  if(!products) return <h1><Loading/></h1>
  
  return (
    <div className="container d-flex flex-wrap justify-content-between gap-4">
      {products.map((prod, i) => (
        <Card key={i} prod={prod}/>
      ))}
    </div>
  )
}

export default Products;