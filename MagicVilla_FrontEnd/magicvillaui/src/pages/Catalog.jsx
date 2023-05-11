import "./styles/catalog.css";
import Villa from "../components/Villa";
import { useState, useEffect } from "react";
import VillaService from "../services/villaService";

function Catalog() {
  const [villas, setVillas] = useState([]);
  const service = new VillaService();

  useEffect(() => {
    loadVillas();
  }, [villas]);

  async function loadVillas() {
    const allVillas = await service.getVillas();
    setVillas(allVillas);
  }

  async function handlePatch(id, field, value) {
    try {
      const updatedVilla = await service.patchVilla(id, field, value);
      const updatedVillas = villas.map((villa) => {
        if (villa.id === updatedVilla.id) {
          return updatedVilla;
        } else {
          return villa;
        }
      });
      setVillas(updatedVillas);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    await service.deleteVilla(id);
    let copy = villas.filter((v) => v.id !== id);
    setVillas(copy);
  }

  return (
    <div className="catalog">
      {villas.map((villa) => (
        <Villa
          villa={villa}
          key={villa.id}
          onDelete={handleDelete}
          onPatch={handlePatch}
        />
      ))}
    </div>
  );
}

export default Catalog;
