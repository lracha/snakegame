import React from "react";
import { View } from "react-native";
import constants from "../../../constants";
export default function Body({ elements, position, size }) {
  const bodyList = elements.map((el, idx) => (
    <View
      key={idx}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: el[0] * size,
        top: el[1] * size,
        backgroundColor: "#497A45",
      }}
    />
  ));
  return (
    <View
      style={{
        width: constants.GRID_SIZE * size,
        height: constants.GRID_SIZE * size,
      }}
    >
      {bodyList}
    </View>
  );
    }