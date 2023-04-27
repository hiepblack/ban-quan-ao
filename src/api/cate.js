import instance from "./instance";
export const getAllcate = () => {
  return instance.get("category");
};
export const addnewcate = (cate) => {
  return instance.post("category", cate);
};
export const updatecate = () => {
  return instance.get("category");
};
export const deletecate = () => {
  return instance.get("category");
};
