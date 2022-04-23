import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import searchState from "../../atoms/Search";
import Body from "../../components/Body";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import SearchArea from "../../components/SearchArea";
import * as S from "./styles";

const MainContainer = () => {
  const search = useRecoilValue(searchState);
  const navigation = useNavigate();

  useEffect(() => {
    const querys: string[] = [];

    if (search.title.split("").length > 0) {
      querys.push(`keyword=${search.title}`);
    }

    if (search.chips.some((value) => value.active)) {
      search.chips.forEach((value) => {
        if (value.active) {
          querys.push(`price=${value.id}`);
        }
      });
    }

    if (querys.length > 0) {
      navigation({ pathname: "/main", search: querys.join("&") });
    } else {
      navigation("/main");
    }
  }, [navigation, search]);

  return (
    <S.Container>
      <SearchArea />
      <Filter />
      <Body />
      <Pagination />
    </S.Container>
  );
};

export default MainContainer;
