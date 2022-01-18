import styled from "styled-components";
import { default_border_radius, palette_colors } from "core/theme/constants";

export const SelectedCharacterWrapper = styled.div`
  background: ${palette_colors.secondary_light};
  border-radius: ${default_border_radius};
  margin-left: 10px;
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }

  h4 {
    margin: 10px 0 5px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid white;
`;

export const InformationSection = styled.div`
  margin-top: 20px;
  min-height: 100px;
  min-width: 130px;
  position: relative;
`;

export const HomeSection = styled.div`
  margin-bottom: 10px;
`;

export const StarshipsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -10px;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    min-width: 170px;
  }
`;
