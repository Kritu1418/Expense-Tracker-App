export const BASE_URL = "https://expense-tracker-app-zhuo.onrender.com/api/v1";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    GET_USER: "/auth/getUser",
  },
  INCOME: {
    ADD_INCOME: "/income/add",
    GET_ALL_INCOME: "/income/get",
  },
  EXPENSE: {
    ADD_EXPENSE: "/expense/add",
    GET_ALL_EXPENSE: "/expense/get",
  },
  // Yeh dashboard ka bilkul sahi address hai
  DASHBOARD: {
    GET_STATS: "/dashboard",
  },
};

