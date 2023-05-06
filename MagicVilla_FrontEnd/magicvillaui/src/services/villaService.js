import axios from "axios";

class VillaService {
  async getVillas() {
    //var data = [];
    // axios
    //   .get("https://localhost:7088/api/VillaApi")
    //   .then((response) => {
    //     for (let key in response.data) {
    //       data.push({ ...response.data[key] });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    let resp = await axios.get("https://localhost:7088/api/VillaApi");
    return resp.data;
  }
}
export default VillaService;
