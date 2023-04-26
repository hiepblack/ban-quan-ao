import instance from "./instance";
export const getAllcate = () => {
  return instance.get("category");
};
