'use client';
import { useState } from 'react';

export default function PortfolioModal({ portfolio, mode, onClose, onSave }) {
  const [formData, setFormData] = useState(portfolio);
  const [imageFields, setImageFields] = useState(portfolio.images || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (index, field, value) => {
    const updatedImages = [...imageFields];
    updatedImages[index] = {
      ...updatedImages[index],
      [field]: value,
    };
    setImageFields(updatedImages);
  };

  const addImageField = () => {
    setImageFields([...imageFields, { imgSrc: '', imgAlt: '' }]);
  };

  const removeImageField = (index) => {
    const updatedImages = [...imageFields];
    updatedImages.splice(index, 1);
    setImageFields(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      images: imageFields,
    });
  };

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="modal-container"
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '20px',
        }}
      >
        <div className="modal-header mb-20">
          <h3 className="modal-title">
            {mode === 'create' ? 'Ajouter un projet' : 'Modifier le projet'}
          </h3>
          <button
            className="modal-close"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} className="form">
            <div className="row mb-20">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="title">Titre</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="input-lg round form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="client">Client</label>
                  <input
                    type="text"
                    name="client"
                    id="client"
                    className="input-lg round form-control"
                    value={formData.client}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="descr">Description</label>
                  <input
                    type="text"
                    name="descr"
                    id="descr"
                    className="input-lg round form-control"
                    value={formData.descr}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="date">Année</label>
                  <input
                    type="number"
                    name="date"
                    id="date"
                    className="input-lg round form-control"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    name="type"
                    id="type"
                    className="input-lg round form-control"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="external">Externe</option>
                    <option value="internal">Interne</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mix">Catégorie</label>
                  <select
                    name="mix"
                    id="mix"
                    className="input-lg round form-control"
                    value={formData.mix}
                    onChange={handleChange}
                  >
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="thumbnail">Miniature</label>
                  <input
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    className="input-lg round form-control"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="/assets/images/portfolio/thumbnail/example.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="services">Services</label>
                  <input
                    type="text"
                    name="services"
                    id="services"
                    className="input-lg round form-control"
                    value={formData.services}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="details">Détails</label>
                  <textarea
                    name="details"
                    id="details"
                    className="input-lg round form-control"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <h4 className="h5 mb-10">Images</h4>
                <div className="image-fields">
                  {imageFields.map((image, index) => (
                    <div key={index} className="row mb-10">
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder="URL de l'image"
                          value={image.imgSrc}
                          onChange={(e) =>
                            handleImageChange(index, 'imgSrc', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder="Texte alternatif"
                          value={image.imgAlt}
                          onChange={(e) =>
                            handleImageChange(index, 'imgAlt', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-mod btn-small btn-circle btn-gray"
                          onClick={() => removeImageField(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-mod btn-small btn-round"
                    onClick={addImageField}
                  >
                    Ajouter une image
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer mt-30">
              <button
                type="button"
                className="btn btn-mod btn-gray btn-medium btn-round"
                onClick={onClose}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-mod btn-medium btn-round"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
