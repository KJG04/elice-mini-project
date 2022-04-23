import * as S from "./styles";
import icon from "../../assets/search-icon.svg";

const SearchArea = () => {
  return (
    <S.Container>
      <S.Icon src={icon} alt="검색 아이콘" />
      <S.Input placeholder="배우고 싶은 언어, 기술을 검색해 보세요" />
    </S.Container>
  );
};

export default SearchArea;
