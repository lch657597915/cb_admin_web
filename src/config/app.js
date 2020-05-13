import { useApiUrl } from "@/config/apiUrl";
import CommonConfig from "@/config/common";
import SystemConfig from "@/config/system";

export default {
  ...CommonConfig,
  ...SystemConfig,
  apiUrl: useApiUrl,
  corporation: "晨豪个人开发",
  siteName: "博客管理后台",
  platformUUID: "OMP"
};
