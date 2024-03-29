import React, { useState } from "react";
import "./styles/createPage.css";
import VillaService from "../services/villaService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [errors, setErrors] = useState({});
  const villaService = new VillaService();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function validateForm() {
    let errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (formData.rate <= 0) {
      errors.rate = "Rate must be a positive number";
    }
    if (formData.occupancy <= 0) {
      errors.occupancy = "Occupancy must be a positive number";
    }
    if (formData.sqft <= 0) {
      errors.sqft = "Square footage must be a positive number";
    }
    if (!/^https?:\/\/.+/.test(formData.imageUrl)) {
      errors.imageUrl = "Please enter a valid URL";
    }
    if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }

    if (formData.details.length < 10) {
      errors.details = "Details must be at least 10 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      try {
        await villaService.createVilla(formData);
        toast.success("Villa creation success!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (err) {
        console.error(err);
        toast.error("Villa creation failed. :(", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error("Please fix the errors in the form.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="nameInput"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="detailsInput">Details</label>
              <textarea
                className={`form-control ${errors.details ? "is-invalid" : ""}`}
                id="detailsInput"
                rows="3"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
              {errors.details && (
                <div className="invalid-feedback">{errors.details}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="rateInput">Rate</label>
              <input
                type="number"
                className={`form-control ${errors.rate ? "is-invalid" : ""}`}
                id="rateInput"
                name="rate"
                value={formData.rate}
                onChange={handleInputChange}
              />
              {errors.rate && (
                <div className="invalid-feedback">{errors.rate}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="occupancyInput">Occupancy</label>
              <input
                type="number"
                className={`form-control ${
                  errors.occupancy ? "is-invalid" : ""
                }`}
                id="occupancyInput"
                name="occupancy"
                value={formData.occupancy}
                onChange={handleInputChange}
              />
              {errors.occupancy && (
                <div className="invalid-feedback">{errors.occupancy}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="sqftInput">Square Footage</label>
              <input
                type="number"
                className={`form-control ${errors.sqft ? "is-invalid" : ""}`}
                id="sqftInput"
                name="sqft"
                value={formData.sqft}
                onChange={handleInputChange}
              />
              {errors.sqft && (
                <div className="invalid-feedback">{errors.sqft}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="imageInput">Image URL</label>
              <input
                type="text"
                className={`form-control ${
                  errors.imageUrl ? "is-invalid" : ""
                }`}
                id="imageInput"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
              {errors.imageUrl && (
                <div className="invalid-feedback">{errors.imageUrl}</div>
              )}
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default CreateVilla;
