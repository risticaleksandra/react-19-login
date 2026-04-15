export const loginApi = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "123456") {
        resolve({ token: "mock-token-123" });
      } else {
        reject({ message: "Invalid credentials" });
      }
    }, 500);
  });
};

let products = [
  { id: "1", name: "Product 1", price: 100 },
  { id: "2", name: "Product 2", price: 120 },
  { id: "3", name: "Product 3", price: 140 },
  { id: "4", name: "Product 4", price: 160 },
  { id: "5", name: "Product 5", price: 180 },
  { id: "6", name: "Product 6", price: 200 },
  { id: "7", name: "Product 7", price: 220 },
  { id: "8", name: "Product 8", price: 240 },
  { id: "9", name: "Product 9", price: 260 },
  { id: "10", name: "Product 10", price: 280 },
  { id: "11", name: "Product 11", price: 300 },
  { id: "12", name: "Product 12", price: 320 },
  { id: "13", name: "Product 13", price: 340 },
  { id: "14", name: "Product 14", price: 360 },
  { id: "15", name: "Product 15", price: 380 },
  { id: "16", name: "Product 16", price: 400 },
  { id: "17", name: "Product 17", price: 420 },
  { id: "18", name: "Product 18", price: 440 },
  { id: "19", name: "Product 19", price: 460 },
  { id: "20", name: "Product 20", price: 480 },
];

export const getProducts = async () => Promise.resolve(products);
export const addProduct = async (p: any) => {
  products.push({ ...p, id: Date.now().toString() });
  return products;
};

export const updateProduct = async (id: string, updatedProduct: any) => {
  products = products.map((product) =>
    product.id === id ? { ...product, ...updatedProduct, id } : product
  );
  return products;
};

export const deleteProduct = async (id: string) => {
  products = products.filter((product) => product.id !== id);
  return products;
};
