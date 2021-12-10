/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Bin } from "../../types/bin";
import mapboxgl from "mapbox-gl";
import "../../style/mapbox-gl.css";

//@ts-ignores
mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

type Props = {
  data: Bin[];
};

const Map: React.FC<Props> = ({ data }: Props) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  const mapContainer = useRef(null);

  useEffect(() => {
    const nodeMap = mapContainer.current;
    if (typeof window === "undefined" || nodeMap === null) return;

    //@ts-ignore
    const currentMap = new mapboxgl.Map({
      //@ts-ignore
      container: nodeMap,
      style: "mapbox://styles/mapbox/light-v10",
      //@ts-ignore
      center: [1.4573, 43.6469],
      //@ts-ignore
      zoom: 9,
    });

    currentMap.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    setMap(currentMap);

    data.forEach((bin: Bin) => {
      const el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el)
        .setLngLat([bin.lon, bin.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
          <h2>Benne à verre</h2>
          <p>Adresse : ${bin.adress}</p>
        `)
        )
        .addTo(currentMap);
    });
    return () => {
      currentMap.remove();
    };
  }, [data]);

  const handleCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (map) {
        map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 15,
          bearing: 0,
          essential: true,
        });
        // if (currentPositionMarker) currentPositionMarker.remove();

        // const el = document.createElement("div");
        // el.className = "marker";

        // const marker = new mapboxgl.Marker(el)
        //   .setLngLat([position.coords.longitude, position.coords.latitude])
        //   .addTo(map);
        // setCurrentPositionMarker(marker);
      }
    });
  };

  return (
    <Container>
      <BtnCurrentPosition onClick={handleCurrentPosition}>
        Se Géolocaliser
      </BtnCurrentPosition>
      <div ref={mapContainer}></div>
    </Container>
  );
};

const Container = styled.div`
  heigth: 500px;
`;

const BtnCurrentPosition = styled.button``;

export default Map;
