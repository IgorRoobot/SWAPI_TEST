import styled from "styled-components";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

export const LinkWrapper = styled(Link)<{
  // styled-components throws an error if we are passing Boolean
  isactive: number;
}>`
  position: relative;
  ${({ isactive }) =>
    isactive
      ? `&:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    background: white;
    box-shadow: 0 0 12px #fff, 0 0 12px #0048ff, 0 0 12px #0048ff;
  }`
      : ``}
`;

export const CustomLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: false });

  return (
    <LinkWrapper isactive={Number(!!match)} to={to}>
      {children}
    </LinkWrapper>
  );
};
