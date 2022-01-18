import styled from "styled-components";
import { default_border_radius } from "core/theme/constants";

interface ISkeleton {
  width: string;
  height: string;
  maxWidth?: string;
  maxHeight?: string;
  margin?: string;
  minWidth?: string;
}

const SkeletonWrapper = styled.div<ISkeleton>`
  opacity: 50%;
  background-color: rgba(204, 204, 204, 0.75);
  background-image: linear-gradient(
    90deg,
    rgba(221, 221, 221, 0.18) 0px,
    rgba(232, 232, 232, 0.7) 40px,
    rgba(221, 221, 221, 0.12) 80px
  );
  animation: shine-avatar 1.2s infinite linear;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  border-radius: ${default_border_radius};
  max-height: ${({ maxHeight }) => maxHeight || ""};
  min-width: ${({ minWidth }) => minWidth || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  @keyframes shine-avatar {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;

export const Skeleton: React.FC<ISkeleton> = (props) => (
  <SkeletonWrapper {...props} />
);
