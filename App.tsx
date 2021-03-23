import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import * as eva from "@eva-design/eva";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./store/store";
import { ApplicationProvider, Button, Icon } from "@ui-kitten/components";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <DrawerNavigation />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </Provider>
    );
  }
}
