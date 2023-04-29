import instance from "./instance";
export const getAllcate = () => {
  return instance.get("category");
};
export const addnewcate = (cate) => {
  return instance.post("category", cate);
};
export const updatecate = (cate, id) => {
  return instance.put(`category/` + id, cate);
};
export const deletecate = (id) => {
  return instance.delete("category/" + id);
};
