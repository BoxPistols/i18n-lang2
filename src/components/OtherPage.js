// import React, { useEffect } from "react";
import React from "react"
import { useTranslation } from "react-i18next"
import "asagiri"
import Box from "@mui/material/Box"

const OtherPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
        <section className="section">
          <h2 className="head-2">Result</h2>
          <h3 className="head-3 design-font-en">i18n: {t("login")}</h3>
          <hr />
          <p>i18n.language: {i18n.language}</p>
        </section>
    </>
  )
}

export default OtherPage
