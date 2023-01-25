import React, { useState } from "react"
import { useTranslation } from "react-i18next"

// Select
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
// Radio
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel"

const Language = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(
    window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "ja"
  )

  const handleLangChange = (evt) => {
    const lang = evt.target.value
    setLanguage(lang)
    i18n.changeLanguage(lang)
    console.log(lang)
  }

  const { t } = useTranslation()
  return (
    <>
      <h1 className="head-1 design-font-en">{t("home")}</h1>
      <form>
        <section className="section">
          {/* Select */}
          <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* <div className="card"> */}
            <Box>
              <FormControl fullWidth>
                <Box
                  sx={{
                    pl: 4,
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <label id="select-label">Select Lang</label>
                  {/* <InputLabel id="select-label">Select Lang</InputLabel> */}
                  <Select
                    labelId="select-label"
                    id="select"
                    onChange={handleLangChange}
                    value={language}
                    checked={language}
                    // selected={window.localStorage.getItem("lang")}
                  >
                    <MenuItem value="ja" checked={i18n.language === "ja"}>
                      JA
                    </MenuItem>
                    <MenuItem value="en" checked={i18n.language === "en"}>
                      EN
                    </MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Box>
          </Box>
          {/* </section> */}
          {/* Radio */}
          {/* <section className="section"> */}
          <Box>
            <FormControl>
              <Box
                sx={{
                  pl: 4,
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <FormLabel id="group-label" sx={{ fontSize: 18 }}>
                  Choose Lang
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="JA"
                    id="ja"
                    type="radio"
                    name="lng"
                    value="ja"
                    checked={i18n.language === "ja"}
                    onChange={handleLangChange}
                  />
                  <FormControlLabel
                    label="EN"
                    control={<Radio />}
                    id="en"
                    type="radio"
                    name="lng"
                    value="en"
                    checked={i18n.language === "en"}
                    onChange={handleLangChange}
                  />
                </RadioGroup>
              </Box>
            </FormControl>
          </Box>
        </section>
      </form>
    </>
  )
}

export default Language
