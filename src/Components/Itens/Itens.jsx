import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
import ImageFilter from "../ImageFilter";

const Itens = styled.div`
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Itens>
  );
};
