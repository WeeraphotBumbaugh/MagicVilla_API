import axios from "axios";

// const url = "https://localhost:7088/api/VillaApi";
const url = "/api/VillaApi";

class VillaService {
  async getVillas() {
    let resp = await axios.get(url);
    return resp.data;
  }
  async createVilla(villaData) {
    let resp = await axios.post(url, villaData);
    return resp.data;
  }
  async deleteVilla(id) {
    let resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  }
}
export default VillaService;
