import Axios from "axios";
import type { AxiosResponse } from "axios";

const axiosUtils = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {},
});

// // Bearer Token Interceptors
// axiosUtils.interceptors.request.use(async (config: any) => {
//   const token = await getAuthToken();

//   if (token) {
//     config.headers["Authority-Token"] = token;
//   }
//   // if (typeof window !== 'undefined') {
//   //   const auth = useAuthStore.getState().auth;

//   //   if (auth?.acceptToken) {
//   //     config.headers['Authority-Token'] = auth.acceptToken;
//   //   }
//   // }
//   return config;
// });

axiosUtils.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  }
);

export default axiosUtils;
