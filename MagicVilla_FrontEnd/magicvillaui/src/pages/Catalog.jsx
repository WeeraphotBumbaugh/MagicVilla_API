import "./styles/catalog.css";
import Villa from "../components/Villa";
import { useState, useEffect } from "react";
import VillaService from "../services/villaService";

function Catalog() {
  const [villas, setVillas] = useState([]);
  const service = new VillaService();

  useEffect(() => {
    loadVillas();
  }, []);

  async function loadVillas() {
    const allVillas = await service.getVillas();
    setVillas(allVillas);
  }

  async function handleDelete(id) {
    await service.deleteVilla(id);
    let copy = villas.filter((v) => v.id !== id);
    setVillas(copy);
    // const updatedVillas = await service.getVillas();
    // setVillas(...updatedVillas);
  }

  return (
    <div className="catalog">
      {villas.map((villa) => (
        <Villa villa={villa} key={villa.id} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Catalog;
