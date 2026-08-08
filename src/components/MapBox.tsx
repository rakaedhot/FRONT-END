import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

const orange = "#E85D2A";

export default function MapBox({ coords, location }: any) {
  if (!coords) return null;
  return (
    <View style={styles.map}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{ latitude: coords.latitude, longitude: coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker coordinate={coords} title="Lokasi Anda" />
        {location && (
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title={location.name} pinColor={orange} />
        )}
        {location && (
          <Circle
            center={{ latitude: location.latitude, longitude: location.longitude }}
            radius={location.radius || 100}
            strokeColor={orange}
            strokeWidth={2}
            fillColor="rgba(232,93,42,0.15)"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: { height: 220, borderRadius: 8, overflow: "hidden", marginBottom: 14, borderWidth: 1, borderColor: "#D5D0C7" },
});
