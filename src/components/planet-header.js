import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../thems/colors";
import { spacing } from "../thems/spacing";
import GlobalText from "./text/GlobalText";

export default function PlanetHeader({ backBtn, title = "THE PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        
        {backBtn && (
        <Pressable 
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-circle" size={24} color={colors.white} />
        </Pressable>
      )}
        
     
      <GlobalText preset="h2">{title}</GlobalText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.3,
    
  },
});
