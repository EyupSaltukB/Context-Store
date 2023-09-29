// abone olma hooku
import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
// kullanılacak context yapısı


const Card = ({ prod }) => {
    // basketContext'e abone olma
    // bu sayede value olarak tanımlanan değere erişiriz
    const context = useContext(BasketContext);

    return (
        <div
            style={{ width: '300px' }}
            className="card py-3 px-3 gap-10">

            <div
                className='d-flex justify-content-center'
                style={{ height: '250px' }}>

                <img
                    className='img-fluid h-100'
                    src={prod.image} />
            </div>

            <div className='card-body d-flex flex-column justify-content-between'>
                <h4>{prod.title}</h4>
                <p className='text-success fw-bold'>$ {prod.price}</p>
                <p className='border-top p-1 text-primary'>{prod.category}</p>
                <button
                    className='w-100 btn btn-success'
                    onClick={() => context.addToCart(prod)}>
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Card;
