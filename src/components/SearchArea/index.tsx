import * as S from "./styles";
import icon from "../../assets/search-icon.svg";
import React, { useCallback, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import searchState from "../../atoms/Search";

const SearchArea = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [keyword, setKeyword] = useState(search.title);
  const keywordRef = useRef(keyword);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
      keywordRef.current = e.target.value;

      setTimeout(() => {
        setSearch((p) => ({ ...p, title: keywordRef.current, offset: 0 }));
      }, 300);
    },
    [setSearch]
  );

  return (
    <S.Container>
      <S.Icon src={icon} alt="검색 아이콘" />
      <S.Input
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={keyword}
        onChange={onChangeHandler}
      />
    </S.Container>
  );
};

export default SearchArea;
