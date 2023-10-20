import React from "react";
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import PlanetHeader from "../components/planet-header";
import GlobalText from "../components/text/GlobalText";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";
import { colors } from "../thems/colors";
import { spacing } from "../thems/spacing";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <GlobalText preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </GlobalText>
      <GlobalText preset="h2">{value}</GlobalText>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    avgTemp,
    radius,
    revolutionTime,
    rotationTime,
    wikiLink,
  } = planet;
  console.log("planet->", planet);

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    // Linking.openSettings()
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />

      <ScrollView>
        <View style={styles.imageView}>{renderImage(name)}</View>
        <View style={styles.detailsView}>
          <GlobalText preset="h1" style={styles.name}>
            {name}
          </GlobalText>
          <GlobalText style={styles.description}>{description}</GlobalText>
          <Pressable style={styles.source} onPress={onPressLink}>
            <GlobalText style={styles}>Source:</GlobalText>
            <GlobalText preset="h4" style={styles.wikipedia}>
              Wikipedia{" "}
              <Feather name="external-link" size={18} color={colors.white} />{" "}
            </GlobalText>
          </Pressable>
        </View>

        <PlanetSection title="rotationTime" value={rotationTime} />
        <PlanetSection title="revolutionTime" value={revolutionTime} />
        <PlanetSection title="radius" value={radius} />
        <PlanetSection title="avgTemp" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  imageView: {
    marginTop: spacing[7],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
    marginBottom: spacing[8],
  },
  name: {
    marginTop: spacing[4],
    textTransform: "uppercase",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecoration: "underlain",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.darkGrey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
