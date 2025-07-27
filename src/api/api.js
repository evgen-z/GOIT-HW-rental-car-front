import axios from "axios";

export const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
  withCredentials: false,
});

export const getCars = async ({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit = 16,
  page = 1,
}) => {
  const params = {
    ...(brand && { brand }),
    ...(rentalPrice && { rentalPrice }),
    ...(minMileage && { minMileage }),
    ...(maxMileage && { maxMileage }),
    limit,
    page,
  };

  const response = await api.get('/cars', { params });
  return response.data;
};

export const getCarById = async (id) => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};

export const getBrands = async () => {
  const response = await api.get('/brands');
  return response.data;
};

