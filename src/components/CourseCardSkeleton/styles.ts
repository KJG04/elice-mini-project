import styled from "@emotion/styled";

export const Container = styled.div`
  background: white;
  border-radius: 8px;
  border: none;
  padding: 28px 24px;
  min-height: 338px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  background-color: lightgray;
  width: 20%;
  height: 1rem;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  max-height: 3.5rem;
  line-height: 1.6;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  width: 50%;
  color: transparent;
  background-color: lightgray;
  height: 1.25rem;
  margin-top: 0.5rem;
`;

export const TitleContainer = styled.div`
  height: 3.5rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  font-size: 14px;
  max-height: 2.5rem;
  line-height: 1.6;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: transparent;
  background-color: lightgray;
  height: 1rem;
`;

export const DescriptionContainer = styled.div`
  height: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const InfoContainer = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  flex: 1;
`;

export const IconText = styled.div`
  & div {
    width: 24px;
    height: 24px;
    background-color: lightgray;
  }
  display: flex;
  align-items: center;

  & span {
    height: 1rem;
    background-color: lightgray;
    width: 50%;
    margin-left: 5px;
  }
`;

export const Logo = styled.div`
  width: 52px;
  height: 52px;
  object-fit: contain;
  background-color: lightgray;
`;
