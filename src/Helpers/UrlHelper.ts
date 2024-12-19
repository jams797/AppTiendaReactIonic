import env from "../env/env";

export const UrlHelper = (endPoint: string) => {
    return env.getBaseUrl() + endPoint;
}