import React from "react";
import Geolocation from "@react-native-community/geolocation";

export const useLocation = () => {
  const [error, set_error] = React.useState("");
  const [position, set_position] = React.useState({
    latitude: 0,
    longitude: 0
  });

  React.useEffect(() => {
    const watchId = Geolocation.watchPosition(
      pos => {
        set_error("");
        set_position({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      },
      e => set_error(e.message)
    );
    return () => {
      Geolocation.clearWatch(watchId)
    };
  }, []);

  return [position, error];
};

export default useLocation;
