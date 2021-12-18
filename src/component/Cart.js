import { useState, useEffect } from "react";

export const Cart = () => {
  const [productsArray, setProductsArray] = useState([
    { name: "chocolate", qty: 0, price: 150 },
    { name: "meggie", qty: 0, price: 78 },
    { name: "Waffers cream & onion", qty: 0, price: 200 },
    { name: "shizwn", qty: 0, price: 250 },
    { name: "Mazza", qty: 0, price: 500 },
    { name: "kinder joy", qty: 0, price: 20 }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  var [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalPrice(productsArray.reduce((r, t) => r + t.price * t.qty, 0));
    setTotalQty(productsArray.reduce((r, t) => r + t.qty, 0));
  }, [productsArray]);

  const handleClick = (index, qty) => {
    var chnageqty = [...productsArray];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProductsArray(chnageqty);
  };

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {productsArray?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} = Price:{item.price} Qty:{item.qty}
          </h2>
          <div>
            <button onClick={() => handleClick(i, item.qty + 1)}>+</button>
            <button
              onClick={() =>
                item.qty !== 0 ? handleClick(i, item.qty - 1) : null
              }
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total item:{totalQty}</h2>
        <h2>total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
};
