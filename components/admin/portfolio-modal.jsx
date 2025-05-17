'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function PortfolioModal({ portfolio, mode, onClose, onSave }) {
  const [formData, setFormData] = useState(portfolio);
  const [imageFields, setImageFields] = useState(portfolio.images || []);
  const t = useTranslations('admin');

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
            {mode === 'create' ? t('addProject') : t('editProject')}
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
                  <label htmlFor="title">{t('projectDetails.title')}</label>
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
                  <label htmlFor="client">{t('projectDetails.client')}</label>
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
                  <label htmlFor="descr">
                    {t('projectDetails.description')}
                  </label>
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
                  <label htmlFor="date">{t('projectDetails.year')}</label>
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
                  <label htmlFor="type">{t('projectDetails.type')}</label>
                  <select
                    name="type"
                    id="type"
                    className="input-lg round form-control"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="external">
                      {t('projectDetails.external')}
                    </option>
                    <option value="internal">
                      {t('projectDetails.internal')}
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mix">{t('projectDetails.category')}</label>
                  <select
                    name="mix"
                    id="mix"
                    className="input-lg round form-control"
                    value={formData.mix}
                    onChange={handleChange}
                  >
                    <option value="indoor">{t('projectDetails.indoor')}</option>
                    <option value="outdoor">
                      {t('projectDetails.outdoor')}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mb-20">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="thumbnail">
                    {t('projectDetails.thumbnail')}
                  </label>
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
                  <label htmlFor="services">
                    {t('projectDetails.services')}
                  </label>
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
                  <label htmlFor="details">{t('projectDetails.details')}</label>
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
                <h4 className="h5 mb-10">{t('projectDetails.images')}</h4>
                <div className="image-fields">
                  {imageFields.map((image, index) => (
                    <div key={index} className="row mb-10">
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="input-lg round form-control"
                          placeholder={t('projectDetails.imageUrl')}
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
                          placeholder={t('projectDetails.imageAlt')}
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
                    {t('projectDetails.addImage')}
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
                {t('cancel')}
              </button>
              <button
                type="submit"
                className="btn btn-mod btn-medium btn-round"
              >
                {t('save')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
