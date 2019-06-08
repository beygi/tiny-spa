/**
 * @module Config
 */
import { DEPLOY_TYPE } from "./constants";

/**
 * configuration object
 */
const config = {
    apiUrl: (DEPLOY_TYPE === "development") ? "https://staging-api.domain.com" : "https://api.domain.com",
    webSocketUrl: "https://socket.domain.com",
};

export default config;
