import styled from "styled-components";
import { palette_colors } from "../../theme/constants";

export const HeaderContainer = styled.header`
  background: linear-gradient(
    90deg,
    rgba(66, 66, 66, 0.45) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 1) 60%,
    rgba(66, 66, 66, 0.45) 100%
  );
  height: 84px;
  color: ${palette_colors.sw_yellow};
  display: flex;
  justify-content: center;
  padding: 0 30px;
  border-bottom: 1px solid ghostwhite;
  margin-bottom: 60px;
`;

export const HeaderNav = styled.nav`
  font-size: 12px;
  display: flex;
  height: 100%;
  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      justify-content: center;
      width: 120px;
    }
  }
`;
export const LogoWrapper = styled.div`
  margin: 0 40px;
`;
