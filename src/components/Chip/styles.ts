import styled from "@emotion/styled";

export const Container = styled.button`
  border-radius: 1000px;
  margin: 0.5rem;
  padding: 0.25rem 0.75rem;
  border: none;
  background: rgb(240, 241, 243);
  cursor: pointer;
  min-width: 1.875rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-in-out 0s;
  color: rgb(94, 95, 97);

  &:hover {
    color: rgb(0, 0, 0);
    background: rgb(225, 226, 228);
  }

  &.active,
  &.active:hover {
    background: rgb(82, 79, 161);
    color: rgb(240, 241, 243);
  }
`;

export const Lable = styled.span`
  line-height: 1.5;
`;
