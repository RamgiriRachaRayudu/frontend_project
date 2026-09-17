import {
  categories,
  samplePesticides,
  additionalPesticides,
} from "../data/sampleData";
const safeGet = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
export const initializeData = () => {
  const catalog = [...samplePesticides, ...additionalPesticides];
  const current = getData("pesticides", null);
  if (!current) {
    localStorage.setItem("pesticides", JSON.stringify(catalog));
  } else {
    const ids = new Set(current.map((p) => p.id));
    const catalogById = new Map(catalog.map((p) => [p.id, p]));
    const refreshed = current.map((product) => {
      const catalogProduct = catalogById.get(product.id);
      return catalogProduct
        ? {
            ...product,
            image: catalogProduct.image,
            description: catalogProduct.description,
          }
        : product;
    });
    localStorage.setItem(
      "pesticides",
      JSON.stringify([...refreshed, ...catalog.filter((p) => !ids.has(p.id))]),
    );
    ["cart", "wishlist"].forEach((key) => {
      const savedItems = getData(key, []);
      const updatedItems = savedItems.map((item) => {
        const catalogProduct = catalogById.get(item.id);
        return catalogProduct
          ? {
              ...item,
              name: catalogProduct.name,
              image: catalogProduct.image,
              description: catalogProduct.description,
            }
          : item;
      });
      localStorage.setItem(key, JSON.stringify(updatedItems));
    });
  }
  if (!localStorage.getItem("categories"))
    localStorage.setItem("categories", JSON.stringify(categories));
  if (!localStorage.getItem("users"))
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          id: "admin-1",
          name: "PestiCare Administrator",
          email: "admin@pesticare.com",
          password: "admin123",
          role: "admin",
        },
      ]),
    );
};
export const getData = (key, fallback = []) => safeGet(key, fallback);
export const setData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
