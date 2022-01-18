import { HeaderContainer, HeaderNav, LogoWrapper } from "./styles";
import { CHARACTERS, MOVIES } from "routing/paths";
import { StarWarsLogo } from "shared/components/Icons/starwarsLogo";
import { CustomLink } from "shared/components/CustomLink/CustomLink";
import { StarParallax } from "shared/components/StarParallax";

export const Header = () => {
  return (
    <HeaderContainer>
      <StarParallax />
      <HeaderNav>
        <div>
          <div>
            <CustomLink to={MOVIES}>MOVIES</CustomLink>
          </div>
          <LogoWrapper>
            <StarWarsLogo color="white" height="84px" bgColor="black" />
          </LogoWrapper>
          <div>
            <CustomLink to={CHARACTERS}>CHARACTERS</CustomLink>
          </div>
        </div>
      </HeaderNav>
    </HeaderContainer>
  );
};
