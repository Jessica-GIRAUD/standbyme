"use client"
import { useState } from "react"
import { teamMembers as initialTeamMembers } from "@/data/team"
import TeamModal from "@/components/admin/team-modal"

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMember, setCurrentMember] = useState(null)
  const [modalMode, setModalMode] = useState("create")

  const handleCreate = () => {
    setCurrentMember({
      name: "",
      role: "",
      description: "",
      image: "",
      socials: [
        { platform: "Facebook", icon: "fa-facebook-f", url: "#" },
        { platform: "Twitter", icon: "fa-twitter", url: "#" },
        { platform: "Pinterest", icon: "fa-pinterest-p", url: "#" },
      ],
    })
    setModalMode("create")
    setIsModalOpen(true)
  }

  const handleEdit = (member) => {
    setCurrentMember(member)
    setModalMode("edit")
    setIsModalOpen(true)
  }

  const handleDelete = (name) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce membre ?")) {
      setTeamMembers(teamMembers.filter((m) => m.name !== name))
    }
  }

  const handleSave = (member) => {
    if (modalMode === "create") {
      setTeamMembers([...teamMembers, member])
    } else {
      setTeamMembers(teamMembers.map((m) => (m.name === currentMember.name ? member : m)))
    }
    setIsModalOpen(false)
  }

  return (
    <div className="team-admin-page">
      <div className="row mb-30">
        <div className="col-md-6">
          <h2 className="section-title">Gestion de l'Équipe</h2>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-mod btn-medium btn-round" onClick={handleCreate}>
            Ajouter un membre
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Nom</th>
                  <th>Poste</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.name}>
                    <td>
                      {member.image && (
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%" }}
                        />
                      )}
                    </td>
                    <td>{member.name}</td>
                    <td>{member.role}</td>
                    <td>{member.description.substring(0, 50)}...</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-mod btn-small btn-circle" onClick={() => handleEdit(member)}>
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-mod btn-small btn-circle btn-gray"
                          onClick={() => handleDelete(member.name)}
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
        <TeamModal member={currentMember} mode={modalMode} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
      )}
    </div>
  )
}
