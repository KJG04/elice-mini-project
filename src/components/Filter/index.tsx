import { useCallback } from "react";
import { useRecoilState } from "recoil";
import searchState from "../../atoms/Search";
import { ChipId } from "../../types/ChipData";
import Chip from "../Chip";
import * as S from "./styles";

const Filter = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const onChipClick = useCallback(
    (id: ChipId) => () => {
      setSearch((prev) => {
        const chips = prev.chips.map((value) => {
          const v = { ...value };

          if (value.id === id) {
            v.active = !value.active;
          }

          return v;
        });

        return { ...prev, chips };
      });
    },
    [setSearch]
  );

  return (
    <S.Container>
      <S.TitleContainer>가격</S.TitleContainer>
      <S.ChipContainer>
        {search.chips.map((value) => (
          <div key={value.id}>
            <Chip active={value.active} onClick={onChipClick(value.id)}>
              {value.text}
            </Chip>
          </div>
        ))}
      </S.ChipContainer>
    </S.Container>
  );
};

export default Filter;
