/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Bin } from "../../types/bin";
import mapboxgl from "mapbox-gl";
import "../../style/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JlYXRlcmRvZ2ZyIiwiYSI6ImNrdzMxaThqNGJ1bDUycHF3ZWl5ejlxcmkifQ.owRyRg_BGO39ft8ETKVT2w";

type Props = {
  data: Bin[];
};

const Map: React.FC<Props> = ({ data }: Props) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  const mapContainer = useRef(null);

  useEffect(() => {
    const nodeMap = mapContainer.current;
    if (typeof window === "undefined" || nodeMap === null) return;
    console.log(process.env.REACT_APP_ACCESS_TOKEN_MAPBOX);
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

  return (
    <Container>
      <div ref={mapContainer}></div>
    </Container>
  );
};

const Container = styled.div`
  heigth: 500px;
`;

export default Map;
