import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-bottom: 20px;
  }

  a {
    color: #0095ff;
  }
`;
