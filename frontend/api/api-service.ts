// src/services/api-service.ts
import apiClient from "../src/services/axios-client";
import { AxiosRequestConfig } from "axios";

// Get all items
export const getAll = <T>(endpoint: string, config?: AxiosRequestConfig) =>
  apiClient.get<T[]>(endpoint, config).then((res) => res.data);

// Get single item by ID
export const getItem = <T>(
  endpoint: string,
  id: string | number,
  config?: AxiosRequestConfig
) => apiClient.get<T>(`${endpoint}/${id}`, config).then((res) => res.data);

// Add a new item
export const addItem = <T>(
  endpoint: string,
  item: T,
  config?: AxiosRequestConfig
) => apiClient.post<T>(endpoint, item, config).then((res) => res.data);

// Update an item (partial update)
export const updateItem = <T>(
  endpoint: string,
  id: string | number,
  item: Partial<T>,
  config?: AxiosRequestConfig
) =>
  apiClient.patch<T>(`${endpoint}/${id}`, item, config).then((res) => res.data);

// Delete an item
export const deleteItem = (
  endpoint: string,
  id: string | number,
  config?: AxiosRequestConfig
) =>
  apiClient.delete<void>(`${endpoint}/${id}`, config).then((res) => res.data);
