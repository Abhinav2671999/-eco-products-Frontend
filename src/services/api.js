import axios from 'axios';

const baseURL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';

export const API_BASE = baseURL;

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 15000,
});

const fallbackImage =
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80';

export const resolveImage = (product) => {
  if (!product) return fallbackImage;
  if (product.imageUrl) return product.imageUrl;
  if (product.image && product.image.startsWith('http')) return product.image;
  if (product.image) return `${baseURL}/uploads/${product.image}`;
  return fallbackImage;
};

export const formatPrice = (value) => {
  const n = Number(value || 0);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
};

export const fetchProducts = async (params = {}) => {
  const { data } = await api.get('/products', { params });
  return data?.products || [];
};

export const fetchProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
