import axios from "../config/axios";

class DashboardService {
    async getWidgets(): Promise<any> {
        const resp = await axios.get("api/widgets");
        return resp.data
    }

    async getChart(): Promise<any> {
        const resp = await axios.get(`api/chart`);
        return resp.data
    }
}

export default new DashboardService();
