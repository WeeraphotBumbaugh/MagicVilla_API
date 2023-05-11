import React, { useState, useEffect } from "react";
import "./styles/createPage.css";
import VillaService from "../services/villaService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditVilla(props) {
  console.log(props);
  console.log(props.villaData);
  console.log(props.location);
  console.log(props.location.state.villaData);

  const [formData, setFormData] = useState({});
  const villaService = new VillaService();

  useEffect(() => {
    if (props?.location?.state) {
      setFormData(props.location.state.villaData);
    }
  }, [props.location.state]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await villaService.createVilla(formData);
      toast.success("Villa successfully edited!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.error(err);
      toast.error("Villa editing failed. :(", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="mb-4">Edit Your Villa</h1>
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
export default EditVilla;
