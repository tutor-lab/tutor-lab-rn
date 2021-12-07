import React, { useState } from "react";
import { Text, StyleSheet,View } from "react-native";

const FilterDetail = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={{ marginTop: 120}}>
      <Text>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FilterDetail;