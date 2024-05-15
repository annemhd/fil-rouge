import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        Cette application comprend un exemple de code pour vous aider à
        démarrer.
      </ThemedText>
      <Collapsible title="Routing basé sur les fichiers">
        <ThemedText>
          Cette application possède deux écrans :{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          et{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          Le fichier de mise en page dans{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
          configure le navigateur à onglets.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">En savoir plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Support Android, iOS et web">
        <ThemedText>
          Vous pouvez ouvrir ce projet sur Android, iOS et le web. Pour ouvrir
          la version web, appuyez sur{" "}
          <ThemedText type="defaultSemiBold">w</ThemedText> dans le terminal où
          s'exécute ce projet.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          Pour les images statiques, vous pouvez utiliser les suffixes{" "}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> et{" "}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> pour fournir des
          fichiers pour différentes densités d'écran.
        </ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">En savoir plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Polices personnalisées">
        <ThemedText>
          Ouvrez <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
          pour voir comment charger{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>
            des polices personnalisées comme celle-ci.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">En savoir plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Composants en mode clair et sombre">
        <ThemedText>
          Ce modèle prend en charge le mode clair et sombre. Le hook{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> vous
          permet d'inspecter le schéma de couleurs actuel de l'utilisateur, vous
          pouvez donc ajuster les couleurs de l'interface en conséquence.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">En savoir plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          Ce modèle inclut un exemple de composant animé. Le composant{" "}
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>{" "}
          utilise la puissante bibliothèque{" "}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>
          pour créer une animation de main qui salue.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Le composant{" "}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{" "}
              fournit un effet de parallaxe pour l'image d'en-tête.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
