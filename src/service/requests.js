import api from "./api";

export const login = (formData) => api.post("/login", formData);

export const register = (formData) => api.post("/register", formData);

export const getAllCategories = () => api.get("/categories");

export const getAllProducts = () => api.get("/products");
