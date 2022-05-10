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
  color: #524fa1;
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
  word-break: break-all;
`;

export const TitleContainer = styled.div`
  height: 3.5rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #5e5f61;
  max-height: 2.5rem;
  line-height: 1.6;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
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
`;

export const IconText = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
  font-size: 12px;
  color: #7d7e80;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
`;
