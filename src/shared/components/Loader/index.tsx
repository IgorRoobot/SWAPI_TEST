import styled from "styled-components";

interface ILoader {
  top?: string;
  left?: string;
}

const LoaderWrapper = styled.div<ILoader>`
  display: flex;
  position: absolute;
  width: 80px;
  height: 80px;
  top: ${({ top }) => top || "50%"};
  left: ${({ left }) => left || "50%"};
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader: React.FC<ILoader> = (props) => (
  <LoaderWrapper {...props}>
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);
