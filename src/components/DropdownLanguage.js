import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "asagiri";
import "milligram";

// Select
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("ja");

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="container">
        <h1 className="head_1">Choose</h1>
        <form>
          <section className="section">
            <Box
              sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}
            >
              <div className="card">
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Lang</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      label="Lng"
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
          </section>
          {/* Radio */}
          <section className="section">
            <FormControl>
              <FormLabel id="group-label">Lang</FormLabel>
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
            </FormControl>
          </section>
        </form>
      </div>
    </>
  );
};

export default DropdownLanguage;
