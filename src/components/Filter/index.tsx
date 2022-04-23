import Chip from "../Chip";
import * as S from "./styles";

const Filter = () => {
  return (
    <S.Container>
      <S.TitleContainer>가격</S.TitleContainer>
      <S.ChipContainer>
        <Chip />
        <Chip />
      </S.ChipContainer>
    </S.Container>
  );
};

export default Filter;
