import * as S from "./styles";

const CourseCardSkeleton = () => {
  return (
    <S.Container>
      <S.Label />
      <S.TitleContainer>
        <S.Title />
      </S.TitleContainer>
      <S.DescriptionContainer>
        <S.Description />
      </S.DescriptionContainer>
      <S.InfoContainer>
        <S.IconTextContainer>
          <S.IconText>
            <div />
            <span />
          </S.IconText>
          <S.IconText>
            <div />
            <span />
          </S.IconText>
          <S.IconText>
            <div />
            <span />
          </S.IconText>
        </S.IconTextContainer>
        <S.Logo />
      </S.InfoContainer>
    </S.Container>
  );
};

export default CourseCardSkeleton;
