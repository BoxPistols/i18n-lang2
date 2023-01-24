// import React, { useEffect } from "react";
import React from "react"
import { useTranslation } from "react-i18next"
import "asagiri"
import "milligram"

const OtherPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="container">
        <section className="section">
          <h2>String: {t("login")}</h2>
          <hr />
          <p>i18n.language: {i18n.language}</p>
        </section>
      </div>
    </>
  )
}

export default OtherPage
