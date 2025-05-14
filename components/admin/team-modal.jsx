"use client"
import { useState } from "react"

export default function TeamModal({ member, mode, onClose, onSave }) {
  const [formData, setFormData] = useState(member)
  const [socialFields, setSocialFields] = useState(member.socials || [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSocialChange = (index, field, value) => {
    const updatedSocials = [...socialFields]
    updatedSocials[index] = {
      ...updatedSocials[index],
      [field]: value,
    }
    setSocialFields(updatedSocials)
  }

  const addSocialField = () => {
    setSocialFields([...socialFields, { platform: "", icon: "", url: "#" }])
  }

  const removeSocialField = (index) => {
    const updatedSocials = [...socialFields]
    updatedSocials.splice(index, 1)
    setSocialFields(updatedSocials)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...formData,
      socials: socialFields,
    })
  }

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="modal-container"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          width: "90%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <div className="modal-header mb-20">
          <h3 className="modal-title">{mode === "create" ? "Ajouter un membre" : "Modifier le membre"}</h3>
          <button
            className="modal-close"
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
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
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="role">Poste</label>
                  <input
                    type="text"
                    name="role"
                    id="role"
                    className="input-lg round form-control"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="image">Photo</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    className="input-lg round form-control"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="/assets/images/team/example.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    className="input-lg round form-control"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <h4 className="h5 mb-10">Réseaux sociaux</h4>
                <div className="social-fields">
                  {socialFields.map((social, index) => (
                    <div key={index} className="row mb-10">
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder="Plateforme"
                          value={social.platform}
                          onChange={(e) => handleSocialChange(index, "platform", e.target.value)}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder="Icône"
                          value={social.icon}
                          onChange={(e) => handleSocialChange(index, "icon", e.target.value)}
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder="URL"
                          value={social.url}
                          onChange={(e) => handleSocialChange(index, "url", e.target.value)}
                        />
                      </div>
                      <div className="col-md-1">
                        <button
                          type="button"
                          className="btn btn-mod btn-small btn-circle btn-gray"
                          onClick={() => removeSocialField(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <button type="button" className="btn btn-mod btn-small btn-round" onClick={addSocialField}>
                    Ajouter un réseau social
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer mt-30">
              <button type="button" className="btn btn-mod btn-gray btn-medium btn-round" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-mod btn-medium btn-round">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
