import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../ButtonSectionStyles";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus fuga
      asperiores labore laboriosam, sint at quasi unde error veritatis.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Lorem ipsum dolor sit <br /> amet consectetur.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Lorem sit <br /> amet consectetur.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"} />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            dolor sit <br /> consectetur.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
