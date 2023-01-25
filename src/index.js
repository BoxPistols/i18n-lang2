import React from "react"
import ReactDOM from "react-dom/client"
import "asagiri"
import "./styles.css"
import Language from "./components/Language"
import OtherPage from "./components/OtherPage"
import "./i18n/locales/i18n"
import Container from "@mui/material/Container"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Container>
      <Language />
      <OtherPage />
    </Container>
    {/* <App /> */}
  </React.StrictMode>
)
