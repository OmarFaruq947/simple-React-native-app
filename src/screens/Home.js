import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import PlanetHeader from "../components/planet-header";
import GlobalText from "../components/text/GlobalText";
import { PLANET_LIST } from "../data/planet-list";
import { colors } from "../thems/colors";
import { spacing } from "../thems/spacing";

// Planet Item component
const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]}></View>
        <GlobalText preset="h4" style={styles.itemName}>
          {name}
        </GlobalText>
      </View>
      <AntDesign name="right" size={18} color={colors.white} />
    </Pressable>
  );
};

// Home component
export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  // search planet
  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
    console.log("filtered list", filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        data={list}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    padding: spacing[4],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
    borderBottomColor: colors.white,
  },
});
