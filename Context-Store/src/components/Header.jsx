import  { useContext } from "react";
import { Link } from "react-router-dom";
import { BiSolidCartAlt } from 'react-icons/Bi';
import { BasketContext } from "../context/BasketContext";

const Header = () => {
    const { items } = useContext(BasketContext);

    // dizideki miktar değerlerini toplama
    const total = items.reduce((total, i) => total + i.amount, 0);
    return (
        <header className="d-flex justify-content-between align-items-center mb-3 p-3 text-light sticky-top bg-dark">
            <Link to={'/'}>
                <h2>Context Store</h2>
            </Link>
            <h5>Aradığınız her şey...</h5>
            <Link
                to={'/sepet'}
                className="fs-4 relative text-light">
                <BiSolidCartAlt />
                <span className="fs-5 mx-2 badge bg-danger absolute">{total}</span>
            </Link>
        </header>
    );
};

export default Header;
