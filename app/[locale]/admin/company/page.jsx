'use client';
import { useState } from 'react';
import { infos as initialInfos } from '@/data/infos';
import CompanyInfoModal from '@/components/admin/company-info-modal';

export default function CompanyInfoPage() {
  const [infos, setInfos] = useState(initialInfos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = (updatedInfos) => {
    setInfos(updatedInfos);
    setIsModalOpen(false);
  };

  return (
    <div className="company-info-admin-page">
      <div className="row mb-30">
        <div className="col-md-6">
          <h2 className="section-title">Informations de l'Entreprise</h2>
        </div>
        <div className="col-md-6 text-end">
          <button
            className="btn btn-mod btn-medium btn-round"
            onClick={handleEdit}
          >
              <i className="mi-edit" />  Modifier les informations
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-40">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">Informations générales</h3>
              <ul className="list-unstyled">
                <li className="mb-10">
                  <strong>Entreprise:</strong> {infos.company}
                </li>
                <li className="mb-10">
                  <strong>Contact:</strong> {infos.contactName}
                </li>
                <li className="mb-10">
                  <strong>Téléphone:</strong> {infos.phoneNumber}
                </li>
                <li className="mb-10">
                  <strong>Email:</strong> {infos.email}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-40">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">Adresses</h3>
              <div className="mb-20">
                <h4 className="h6">Adresse 1:</h4>
                <p>{infos.address1}</p>
              </div>
              <div>
                <h4 className="h6">Adresse 2:</h4>
                <p>{infos.address2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CompanyInfoModal
          infos={infos}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
