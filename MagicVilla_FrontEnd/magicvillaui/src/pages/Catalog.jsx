import "./styles/catalog.css";
import Villa from "../components/Villa";
import { useState, useEffect } from "react";
import VillaService from "../services/villaService";

function Catalog() {
  const [villas, setVillas] = useState([]);

  useEffect(() => {
    async function loadVillas() {
      const service = new VillaService();
      const allVillas = await service.getVillas();
      setVillas(allVillas);
    }
    loadVillas();
  }, []);

  return (
    <div className="catalog">
      {villas.map((v) => (
        <Villa props={v} key={v.id} />
      ))}
    </div>
  );
}

export default Catalog;
