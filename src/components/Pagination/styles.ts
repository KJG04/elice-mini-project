import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 1.5rem;
  justify-content: center;
  display: flex;
`;

export const PageButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0px 6px;
  padding: 0;
  border: none;
  color: #999;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 150ms ease-in-out 0s;

  &:hover {
    color: #524fa1;
  }

  &.active {
    color: white;
    background-color: #524fa1;
  }
`;

export const ArrowContainer = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 0px 6px;
`;
