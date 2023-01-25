import React, { useState } from "react"
import { useTranslation } from "react-i18next"

// Select
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
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
  const [language, setLanguage] = useState("ja")

  const handleLangChange = (evt) => {
    const lang = evt.target.value
    console.log(lang)
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <h1 className="head-1 design-font-en">i18n</h1>
      <form>
        <section className="section">
          <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}>
            <div className="card">
              <Box
                sx={
                  {
                    // p: 1,
                    // display: "flex",
                    // justifyContent: "center",
                    // flexDirection: "column",
                  }
                }
              >
                <FormControl fullWidth>
                  {/* <label id="select-label">Select Lang</label> */}
                  <InputLabel id="select-label">Select Lang</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    label="Select Lang"
                    onChange={handleLangChange}
                    value={language}
                    checked={language}
                  >
                    <MenuItem value="ja" checked={i18n.language === "ja"}>
                      JA
                    </MenuItem>
                    <MenuItem value="en" checked={i18n.language === "en"}>
                      EN
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </Box>
          {/* </section> */}
          {/* Radio */}
          {/* <section className="section"> */}
          <Box
            sx={{
              pl: 4,
            }}
          >
            <FormControl>
              <FormLabel id="group-label">Choose Lang</FormLabel>
              <RadioGroup
                row
                aria-labelledby="group-label"
                name="row-radio-buttons-group"
                // sx={{ display: "flex", justifyContent: "center" }}
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
            </FormControl>
          </Box>
        </section>
      </form>
    </>
  )
}

export default Language
