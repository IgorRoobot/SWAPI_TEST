import styled from "styled-components";
import { Link } from "react-router-dom";
import { default_border_radius, palette_colors } from "core/theme/constants";

export const Wrapper = styled(Link)`
  display: flex;
  max-width: 100px;
  min-width: 320px;
  width: 100%;
  margin: 20px;
  height: 420px;
  flex-direction: column;
  border-radius: ${default_border_radius};
  overflow: hidden;
  position: relative;

  &:hover > div {
    display: flex;
    top: 0;
  }

  box-shadow: 0px 0px 23px -3px rgb(0, 0, 0);
  @media (max-width: 768px) {
    & > div {
      display: flex;
      top: 0;
    }
  }
`;

export const BackdropImg = styled.div`
  flex: 1;
  overflow: hidden;

  & img {
    object-fit: fill;
  }
`;

export const InfoSection = styled.div`
  padding: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 100%;
  left: 0;
  right: 0;
  background: ${palette_colors.secondary_dark};
  backdrop-filter: blur(2px);
  transition: 0.5s;
  box-shadow: 0px 0px 39px -5px rgba(26, 26, 26, 0.83) inset;
  color: white;
  letter-spacing: 0.5px;

  & h1 {
    margin-bottom: 30px;
    border-bottom: 1px solid white;
    padding-bottom: 12px;
  }

  & p {
    display: -webkit-box;
    line-height: 18px;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
