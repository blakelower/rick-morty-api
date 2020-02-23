import React from "react";
import H1 from "./StyledComponents";
import { Div } from "./StyledComponents";
import { Img } from "./StyledComponents";
export default function CharacterCard(props) {
  return (
    <Div>
      <H1>Name:{props.chars.name}</H1>
      <Img src={props.chars.image} alt="rick and morty" />
    </Div>
  );
}