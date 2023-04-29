import instance from "./instance";
export const getAll = () => {
  return instance.get("products/?limit=10000");
};
export const addnewProduct = (data) => {
  return instance.post("products", data);
};
export const updateProduct = (data, id) => {
  return instance.put("products/" + id, data);
};
export const updateProductstatus = (data) => {
  return instance.patch("products/" + data.id, data);
};
export const deleteproduct = (id) => {
  return instance.delete("products/" + id);
};
