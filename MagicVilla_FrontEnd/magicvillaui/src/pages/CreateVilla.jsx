import React, { useState } from "react";
import "./styles/createPage.css";
import VillaService from "../services/villaService";

function CreateVilla() {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    rate: 0,
    occupancy: 0,
    sqft: 0,
    imageUrl: "",
    amenity: "",
  });
  const villaService = new VillaService();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await villaService.createVilla(formData);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="mb-4">Create a Villa</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="detailsInput">Details</label>
              <textarea
                className="form-control"
                id="detailsInput"
                rows="3"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="rateInput">Rate</label>
              <input
                type="number"
                className="form-control"
                id="rateInput"
                name="rate"
                value={formData.rate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="occupancyInput">Occupancy</label>
              <input
                type="number"
                className="form-control"
                id="occupancyInput"
                name="occupancy"
                value={formData.occupancy}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sqftInput">Square Footage</label>
              <input
                type="number"
                className="form-control"
                id="sqftInput"
                name="sqft"
                value={formData.sqft}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageInput">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imageInput"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amenityInput">Amenity</label>
              <input
                type="text"
                className="form-control"
                id="amenityInput"
                name="amenity"
                value={formData.amenity}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary create-button">
              Create Villa
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateVilla;
