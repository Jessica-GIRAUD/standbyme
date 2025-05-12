'use client';
import { useState } from 'react';

export default function CompanyInfoModal({ infos, onClose, onSave }) {
  const [formData, setFormData] = useState(infos);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
            Modifier les informations de l'entreprise
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
                  <label htmlFor="company">Nom de l'entreprise</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="input-lg round form-control"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="contactName">Nom du contact</label>
                  <input
                    type="text"
                    name="contactName"
                    id="contactName"
                    className="input-lg round form-control"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Numéro de téléphone</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="input-lg round form-control"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phoneNumberRef">
                    Numéro de téléphone (format international)
                  </label>
                  <input
                    type="text"
                    name="phoneNumberRef"
                    id="phoneNumberRef"
                    className="input-lg round form-control"
                    value={formData.phoneNumberRef}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="address1">Adresse 1</label>
                  <input
                    type="text"
                    name="address1"
                    id="address1"
                    className="input-lg round form-control"
                    value={formData.address1}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="googleMap1">Google Map 1 (iframe)</label>
                  <textarea
                    name="googleMap1"
                    id="googleMap1"
                    className="input-lg round form-control"
                    rows={3}
                    value={formData.googleMap1}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="address2">Adresse 2</label>
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    className="input-lg round form-control"
                    value={formData.address2}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="googleMap2">Google Map 2 (iframe)</label>
                  <textarea
                    name="googleMap2"
                    id="googleMap2"
                    className="input-lg round form-control"
                    rows={3}
                    value={formData.googleMap2}
                    onChange={handleChange}
                  ></textarea>
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
