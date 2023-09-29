import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

const Checkout = () => {
  const { items, addToCart, removeFromBasket } = useContext(BasketContext);

  const total = items.reduce((total, i) => total + i.price * i.amount, 0);

  return (
    <div className="d-flex justify-content-center flex-column">
      {items.length == 0 ? (
        <h3 className="d-flex justify-content-center">
          Sepetinizde ürün bulunmamaktadır.</h3>
      ):(
        <h4 className="text-center my-4">
        Toplam Tutar: 
        <span className="text-success"> $ {total.toFixed(2)}</span>
      </h4>
      )}


      {items.length > 0 && items.map((i, index) => (
          <div 
          key={index}
          className="d-flex border-bottom justify-content-around align-items-center p-2 gap-3">
            <img className="rounded shadow" style={{ height: '100px' }} src={i.image} />
            <h4>{i.title.slice(0, 20)}</h4>
            <h3 className="text-success">$ {i.price}</h3>
            <p className="fw-bold">Miktar: {i.amount}</p>
            <div className="d-flex flex-column fs-3 gap-2">
              <FaArrowCircleUp
                role="button"
                className="text-success"
                onClick={() => addToCart(i)}
              />
              <FaArrowCircleDown
                role="button"
                className="text-danger"
                onClick={() => removeFromBasket(i)}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Checkout;
