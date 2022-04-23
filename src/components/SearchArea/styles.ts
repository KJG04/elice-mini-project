import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 12px 0px;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  display: flex;
  background: white;
`;

export const Input = styled.input`
  &::placeholder {
    color: gray;
  }
  border: none;
  outline: none;
  flex: 1;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 16px;
`;
