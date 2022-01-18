import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: white;

  & > div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  margin-right: 40px;
  min-width: 300px;
  z-index: 1;

  & img {
    object-fit: fill;
  }

  @media (max-width: 600px) {
    display: flex;
    margin: 0 0 20px 0;
  }
`;

export const Information = styled.div`
  h1 {
    font-size: 45px;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 12px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 32px;
    }
  }
`;

export const InfoListSection = styled.div`
  display: flex;
  border-top: 1px solid white;
  flex-wrap: wrap;

  & > div {
    margin-right: 20px;
    flex: 40%;

    h3 {
      margin: 20px 0 10px 0;
    }
  }
`;
