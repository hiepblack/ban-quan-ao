import instance from "./instance";
export const getAll = () => {
  return instance.get("products");
};
