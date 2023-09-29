import { createContext, useState } from 'react';

// context yapısının temelini oluşturma
export const BasketContext = createContext();

// sağlayıcı ve onun tuttuğu verileri tanımlama
export function BasketProvider({ children }) {
    const [items, setItems] = useState([]);

    // sepete yeni ürün ekleme
    const addToCart = (product) => {
        // sepete daha önce bu ürün eklendi mi kontrol ?
        const found = items.find((i) => i.id === product.id);

        if (found) {
            // güncellenecek elemanın sırasını bulma
            const index = items.findIndex((i) => i.id === product.id)

            // kopya dizi tanımlama
            const clone = [...items];

            // elemanı güncelleme
            clone[index] = { ...found, amount: found.amount + 1 };

            // state güncelleme
            setItems(clone)

        } else {
            // miktar değerini 1 tanımlayıp ürünü sepete ekler
            setItems([...items, { ...product, amount: 1 }]);
        }
    };

    // sepetten ürün çıkarma
    const removeFromBasket = (product) => {
        const found = items.find((i) => i.id === product.id);

        if (found.amount > 1) {
            // miktar 1'den fazla ise miktarı azalt
            const updated = items.map((item) =>
                item.id === found.id ? { ...found, amount: found.amount - 1 } : item);
            setItems(updated)
        } else {
            // miktar 1 ise sepetten akldır
            const filtred = items.filter((i) => i.id !== found.id);
            
            // state'i güncelle
            setItems(filtred)
        }
    }

    return (
        <BasketContext.Provider
            value={{ items, addToCart, removeFromBasket }}
        >
            {children}
        </BasketContext.Provider>
    )
} 
