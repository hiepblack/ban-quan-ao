import instance from "./instance";
export const getAllorder = () => {
  return instance.get("order/month");
};
