import instance from "./instance";
export const getAllorder = () => {
  return instance.get("order/month");
};
export const getAllod = () => {
  return instance.get("order");
};
