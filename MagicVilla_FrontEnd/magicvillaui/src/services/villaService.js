import axios from "axios";

class VillaService {
  async getVillas() {
    let resp = await axios.get("https://localhost:7088/api/VillaApi");
    return resp.data;
  }
  async createVilla(villaData) {
    let resp = await axios.post(
      "https://localhost:7088/api/VillaApi",
      villaData
    );
    return resp.data;
  }
}
export default VillaService;
