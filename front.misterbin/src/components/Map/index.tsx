/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Bin } from "../../types/bin";
import mapboxgl from "mapbox-gl";
import "../../style/mapbox-gl.css";
import Wave from "../Wave";

//@ts-ignores
mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

type Props = {
  data: Bin[];
};

const Map: React.FC<Props> = ({ data }: Props) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [currentPositionMarker, setCurrentPositionMarker] =
    useState<mapboxgl.Marker | null>(null);

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
        if (currentPositionMarker) currentPositionMarker.remove();

        const el = document.createElement("div");
        el.className = "marker";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(map);
        setCurrentPositionMarker(marker);
      }
    });
  };

  return (
    <Container>
      <Wave />
      <ContentArea>
        <BtnCurrentPosition onClick={handleCurrentPosition}>
          Se Géolocaliser
        </BtnCurrentPosition>
      </ContentArea>
      <MapContent>
        <MapArea ref={mapContainer}></MapArea>
      </MapContent>
    </Container>
  );
};

const Container = styled.div``;

const MapContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MapArea = styled.div`
  width: 95%;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0 30px 0;
`;
const BtnCurrentPosition = styled.button`
  margin: 20px;
  position: relative;
  padding: 10px;
  height: 50px;
  z-index: 5;
  width: 130px;
  border: none;
  background-color: #6ede8a;
  transition: all 0.3s;

  ::after {
    width: 128px;
    height: 48px;
    position: absolute;
    content: "";
    border: 1px solid black;
    top: -5px;
    left: -5px;
    transition: all 0.3s;
  }

  :hover {
    cursor: pointer;
    ::after {
      top: 0px;
      left: 0px;
    }
  }
`;

export default Map;
