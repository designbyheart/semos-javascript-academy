/*
The apiLoadProducts function is an asynchronous function that returns an array of product objects. 
Each object represents a product with properties like name, color, size, price, quantity, and productID. 
*/
export const apiLoadProducts = async () => {
  return [
    {
      name: "Shadowtech Eclipse Sneakers",
      color: "Black",
      size: "US 8",
      price: "$120.53",
      quantity: 1,
      productID: 1,
    },
    {
      name: "Neonoir Vanguard Boots",
      color: "Black",
      size: "US 8",
      price: "$210.14",
      quantity: 1,
      productID: 2,
    },
    {
      name: "Cybergoth Stealth Kicks",
      color: "Black",
      size: "US 8",
      price: "$154.32",
      quantity: 1,
      productID: 3,
    },
  ];
};
