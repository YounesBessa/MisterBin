/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getAllBins } from "../../stores/bin";
import { Bin } from "../../types/bin";
import Map from "../Map/index";

const Bins: React.FC = () => {
  const [bins, setBins] = useState<Bin[]>([]);

  useEffect(() => {
    //GET ALL BIN
    const fetchBins = async () => {
      const { data } = await getAllBins();

      setBins(data || []);
    };
    fetchBins();
  }, []);

  return (
    <Container>
      <Map data={bins} />
    </Container>
  );
};

const Container = styled.div``;

export default Bins;
