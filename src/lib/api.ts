import "isomorphic-unfetch";
import config from "../config";

export default class API {
    public static instance: any;

    public static getInstance(): API {
        if (!this.instance) {
            this.instance = new API(config.apiUrl, {"Content-Type": "application/json" , "Accept": "application/json"});
        }
        return this.instance;
    }

    public baseURL: string;
    public headers: HeadersInit;
    public AuthToken: string;

    constructor(baseURL, headers) {
        this.baseURL = baseURL;
        this.headers = headers;
    }

    public setAuthToken(token) {
        this.AuthToken = token;
        this.headers = {...this.headers , Authorization : `Token ${token}` };
        if (token === null) {
            this.destroy();
        }
    }

    public destroy() {
        this.AuthToken = null;
        delete this.headers[`Authorization`];
    }

    public getUser(): Promise<Response> {
            return fetch(`https://randomuser.me/api/`, {
                method: "get",
                headers: this.headers,
              });
    }
}
