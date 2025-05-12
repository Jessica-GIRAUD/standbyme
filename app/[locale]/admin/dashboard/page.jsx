'use client';
import Link from 'next/link';
import { portfolios } from '@/data/portfolio';
import { teamMembers } from '@/data/team';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="row">
        <div className="col-12">
          <h2 className="section-title mb-40">Tableau de bord</h2>
        </div>
      </div>

      <div className="row mb-50">
        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">Portfolio</h3>
              <p className="card-text mb-20">
                Nombre de projets: {portfolios.length}
              </p>
              <Link
                href="/admin/portfolio"
                className="btn btn-mod btn-border btn-round btn-small"
              >
                Gérer le portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">Équipe</h3>
              <p className="card-text mb-20">
                Nombre de membres: {teamMembers.length}
              </p>
              <Link
                href="/admin/team"
                className="btn btn-mod btn-border btn-round btn-small"
              >
                Gérer l'équipe
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">Informations</h3>
              <p className="card-text mb-20">
                Coordonnées et adresses de l'entreprise
              </p>
              <Link
                href="/admin/company-info"
                className="btn btn-mod btn-border btn-round btn-small"
              >
                Gérer les informations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="alert alert-info">
            <p className="mb-0">
              <strong>Bienvenue dans votre espace d'administration.</strong>{' '}
              Vous pouvez gérer votre portfolio, votre équipe et les
              informations de votre entreprise depuis ce tableau de bord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
