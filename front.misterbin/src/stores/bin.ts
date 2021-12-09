import { Bin } from "../types/bin";
import { request } from "../utils/request";

const getAllBins = async () =>
  await request<Bin[]>("/getAllBin", { method: "GET" });

export { getAllBins };
