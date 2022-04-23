import * as S from "./styles";
import LevelIcon from "../../assets/level.svg";
import ClassIcon from "../../assets/class.svg";
import CalenderIcon from "../../assets/calender.svg";

const CourseCard = () => {
  return (
    <S.Container>
      <S.Label>유료</S.Label>
      <div>
        <S.TitleContainer>
          <S.Title>자바스크립트 클론코딩</S.Title>
        </S.TitleContainer>
      </div>
      <div>
        <S.DescriptionContainer>
          <S.Description>
            인스타그램과 유튜브 웹사이트를 직접 내 손으로 한땀 한땀 따라 만들면서 자바스크립트와
            리액트로 웹 프론트엔드를 개발해봅니다.
          </S.Description>
        </S.DescriptionContainer>
      </div>
      <S.InfoContainer>
        <S.IconTextContainer>
          <S.IconText>
            <img src={LevelIcon} alt="난이도 아이콘" />
            <span>난이도 : 미설정</span>
          </S.IconText>
          <S.IconText>
            <img src={ClassIcon} alt="난이도 아이콘" />
            <span>수업 : 온라인</span>
          </S.IconText>
          <S.IconText>
            <img src={CalenderIcon} alt="난이도 아이콘" />
            <span>기간 : 무제한</span>
          </S.IconText>
        </S.IconTextContainer>
        <S.Logo alt="로고" />
      </S.InfoContainer>
    </S.Container>
  );
};

export default CourseCard;
