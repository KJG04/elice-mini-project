import * as S from "./styles";
import LevelIcon from "../../assets/level.svg";
import ClassIcon from "../../assets/class.svg";
import CalenderIcon from "../../assets/calender.svg";
import NoImage from "../../assets/no-image.png";
import { FC, useMemo, useRef } from "react";
import Course from "../../types/Course";

const CourseCard: FC<Course> = ({
  enroll_type,
  is_free,
  logo_file_url,
  short_description,
  title,
}) => {
  const logoRef = useRef<HTMLImageElement>(null);

  const label = useMemo(() => {
    if (enroll_type === 4) {
      return "구독";
    }

    if (is_free) {
      return "무료";
    }

    return "유료";
  }, [enroll_type, is_free]);

  const onError = () => {
    if (!logoRef.current) {
      return;
    }

    logoRef.current.src = NoImage;
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <div>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
      </div>
      <div>
        <S.DescriptionContainer>
          <S.Description>{short_description}</S.Description>
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
        <S.Logo ref={logoRef} alt="로고" onError={onError} src={logo_file_url || NoImage} />
      </S.InfoContainer>
    </S.Container>
  );
};

export default CourseCard;
