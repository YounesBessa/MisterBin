import { ApiRequestConfig, ApiResponse } from "../types/api";
import axios from "axios";

const createApiUrl = (url: string): string => {
  return `http://127.0.0.1:8000${url}`;
};

export const request = async <T>(
  url: string,
  options?: ApiRequestConfig
): Promise<ApiResponse<T>> => {
  url = createApiUrl(url);

  try {
    const response = await axios.request<T>({ url, ...options });
    return { data: response.data, error: "" };
  } catch (error: any) {
    return { data: undefined, error: error.message };
  }
};
