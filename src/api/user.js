import instance from "./instance";
export const getAlluser = () => {
  return instance.get("auth");
};
