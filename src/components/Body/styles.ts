import styled from "@emotion/styled";

export const Count = styled.div`
  font-size: 0.75rem;
  color: #222;
  font-weight: 700;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  border-bottom: 1px solid rgb(225, 226, 228);
`;

export const Grid = styled.div`
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 16px;

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Message = styled.div`
  text-align: center;
  color: #999;
  font-size: 16px;
  margin-top: 16px;
`;

export const NoImage = styled.img`
  margin: 0 auto;
  display: block;
`;
