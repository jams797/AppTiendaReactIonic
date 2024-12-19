class Env {
    private baseUrl = "https://api.escuelajs.co/api/v1/";

    public getBaseUrl() {
        return this.baseUrl;
    }
}

export default new Env();