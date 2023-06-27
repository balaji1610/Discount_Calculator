import { useState } from "react";

import { Link } from "react-router-dom";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonComp() {
  const [alignment, setAlignment] = useState(true);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        style={{
          height: "40px",
          backgroundColor: "#ffffff",
        }}
      >
        <ToggleButton
          value="web"
          style={{
            border: "2px solid red",
          }}
        >
          {" "}
          <Link to="/">
            <div>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/color/48/discount--v1.png"
                alt="discount--v1"
              />
            </div>
          </Link>
        </ToggleButton>
        <ToggleButton
          value="android"
          style={{
            border: "2px solid red",
          }}
        >
          <Link to="/History">
            <div>
              {" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/100/time-machine--v1.png"
                alt="time-machine--v1"
              />
            </div>
          </Link>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
