import React, { useState } from "react";
import { Switch } from "react-native";

function SwitchComponent() {
  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle((previousState) => !previousState);
  onValueChange = { toggleSwitch };
  return <Switch value={toggle} onValueChange={toggleSwitch} />;
}

export default SwitchComponent;
