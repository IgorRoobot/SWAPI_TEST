import styled from "styled-components";
import { default_border_radius } from "core/theme/constants";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  padding: 20px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieListSection = styled.div`
  max-width: 300px;
  height: 280px;
  margin-right: 20px;
  position: sticky;
  top: 40px;
  background: rgba(243, 243, 243, 0.11);
  padding: 20px;
  border-radius: ${default_border_radius};

  h3 {
    margin-bottom: 20px;
  }

  li {
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    position: static;
    margin-bottom: 40px;
    margin-right: 0;
  }
`;

export const ListItem = styled.li<{ isactive: boolean }>`
  position: relative;
  width: fit-content;
  margin-bottom: 4px;
  cursor: pointer;
  ${({ isactive }) =>
    isactive
      ? `&:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 5px;
    background: white;
    box-shadow: 0 0 12px #fff, 0 0 12px #0048ff, 0 0 12px #0048ff;
  }`
      : ``}
`;

export const CharactersSection = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const SelectedCharacterSection = styled.div`
  position: relative;
`;

export const GoBackBtn = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.61);
  border: none;
  position: absolute;
  top: -24px;
  left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
