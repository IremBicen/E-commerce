import { useState, createContext, useContext} from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [ items, setItems ] = useState([]);

    const addToBasket = (data, findBasketItem) => {
        if (!findBasketItem) {
           return setItems((items) =>[data, ...items]);
        }
        const filtered =items.filter((item) => item._id !== findBasketItem._id)
        setItems(filtered);
    };
    const removeFromBasket = (item_id) => {
		const filtered = items.filter((item) => item._id !== item._id);
		setItems(filtered);
	};

	const emptyBasket = () => setItems([]);



    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
		emptyBasket,
    };

    return (
        <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
    );
};

const useBasket = () => useContext(BasketContext);

export {BasketProvider, useBasket};
