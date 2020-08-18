import React, { useState } from "react";
import { Switch } from "react-native";

function SwitchComponent({ setSelectedColours, colorName, selectedColours }) {
  const [toggle, setToggle] = useState(false);
  let newColours = [];

  const toggleSwitch = () => {
    setToggle((previousState) => !previousState);
    if (toggle === true) {
      // remove the unselected colour
      newColours = selectedColours.filter((e) => e !== colorName);
      setSelectedColours(newColours);
    } else {
      setSelectedColours((elem) => [...elem, colorName]);
    }
  };
  onValueChange = { toggleSwitch };
  return <Switch value={toggle} onValueChange={toggleSwitch} />;
}

export default SwitchComponent;
