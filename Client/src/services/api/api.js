import { userRequest } from "requestMethods";

export const getList = async () => {
  try {
    const res = await userRequest.get("/treatments/list");

    return res
  } catch (error) {
    return false
  }
};
