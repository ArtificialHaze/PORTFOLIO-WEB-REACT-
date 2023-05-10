import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../ButtonSectionStyles";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section id="acomplishments">
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}+</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
