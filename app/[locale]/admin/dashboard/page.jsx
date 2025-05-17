"use client"
import Link from "next/link"
import { portfolios } from "@/data/portfolio"
import { teamMembers } from "@/data/team"
import { useTranslations } from "next-intl"

export default function Dashboard() {
  const t = useTranslations("admin")

  return (
    <div className="dashboard-page">
      <div className="row">
        <div className="col-12">
          <h2 className="section-title mb-40">{t("dashboard")}</h2>
        </div>
      </div>

      <div className="row mb-50">
        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">{t("portfolio")}</h3>
              <p className="card-text mb-20">
                {t("projectCount")}: {portfolios.length}
              </p>
              <Link href="/admin/portfolio" className="btn btn-mod btn-border btn-round btn-small">
                {t("managePortfolio")}
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">{t("team")}</h3>
              <p className="card-text mb-20">
                {t("teamMemberCount")}: {teamMembers.length}
              </p>
              <Link href="/admin/team" className="btn btn-mod btn-border btn-round btn-small">
                {t("manageTeam")}
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-30">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5 mb-20">{t("companyInfo")}</h3>
              <p className="card-text mb-20">{t("companyDetails.company")}</p>
              <Link href="/admin/company-info" className="btn btn-mod btn-border btn-round btn-small">
                {t("manageInfo")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="alert alert-info">
            <p className="mb-0">
              <strong>{t("welcome")}</strong> {t("welcomeMessage")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
