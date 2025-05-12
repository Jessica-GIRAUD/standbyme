"use client"
import { useState } from "react"
import { portfolios as initialPortfolios } from "@/data/portfolio"
import PortfolioModal from "@/components/admin/portfolio-modal"

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState(initialPortfolios)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPortfolio, setCurrentPortfolio] = useState(null)
  const [modalMode, setModalMode] = useState("create")

  const handleCreate = () => {
    setCurrentPortfolio({
      id: Math.max(...portfolios.map((p) => p.id), 0) + 1,
      type: "external",
      mix: "indoor",
      thumbnail: "",
      images: [],
      title: "",
      client: "",
      descr: "",
      services: "",
      details: "",
      date: new Date().getFullYear(),
    })
    setModalMode("create")
    setIsModalOpen(true)
  }

  const handleEdit = (portfolio) => {
    setCurrentPortfolio(portfolio)
    setModalMode("edit")
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      setPortfolios(portfolios.filter((p) => p.id !== id))
    }
  }

  const handleSave = (portfolio) => {
    if (modalMode === "create") {
      setPortfolios([...portfolios, portfolio])
    } else {
      setPortfolios(portfolios.map((p) => (p.id === portfolio.id ? portfolio : p)))
    }
    setIsModalOpen(false)
  }

  return (
    <div className="portfolio-admin-page">
      <div className="row mb-30">
        <div className="col-md-6">
          <h2 className="section-title">Gestion du Portfolio</h2>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-mod btn-medium btn-round" onClick={handleCreate}>
            Ajouter un projet
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Miniature</th>
                  <th>Titre</th>
                  <th>Client</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolios.map((portfolio) => (
                  <tr key={portfolio.id}>
                    <td>{portfolio.id}</td>
                    <td>
                      {portfolio.thumbnail && (
                        <img
                          src={portfolio.thumbnail || "/placeholder.svg"}
                          alt={portfolio.title}
                          style={{ width: "60px", height: "40px", objectFit: "cover" }}
                        />
                      )}
                    </td>
                    <td>{portfolio.title}</td>
                    <td>{portfolio.client}</td>
                    <td>{portfolio.descr}</td>
                    <td>{portfolio.date}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-mod btn-small btn-circle" onClick={() => handleEdit(portfolio)}>
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-mod btn-small btn-circle btn-gray"
                          onClick={() => handleDelete(portfolio.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PortfolioModal
          portfolio={currentPortfolio}
          mode={modalMode}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
