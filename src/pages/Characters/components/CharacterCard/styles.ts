import styled from "styled-components";
import { default_border_radius, palette_colors } from "core/theme/constants";

export const CharacterCardWrapper = styled.div`
  width: 230px;
  padding: 10px;
  cursor: pointer;
  border-radius: ${default_border_radius};
  background: ${palette_colors.secondary_light};
  margin: 0 10px 20px 10px;
  @media (max-width: 768px) {
    flex: 100%;
    margin: 10px 0;
  }
`;
