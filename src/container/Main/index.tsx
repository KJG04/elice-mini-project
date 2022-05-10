import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import searchState from "../../atoms/Search";
import Body from "../../components/Body";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import SearchArea from "../../components/SearchArea";
import * as S from "./styles";

const MainContainer = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const navigation = useNavigate();
  const { search: searchLocation } = useLocation();
  const prevSearch = useRef<typeof search | null>(null);

  useEffect(() => {
    const searchParams = new window.URLSearchParams(searchLocation);
    const keyword = searchParams.get("keyword");
    const prices = searchParams.getAll("price");

    console.log(keyword);

    setSearch((prev) => {
      console.log("prev: " + prev.title);

      if (prev.title === keyword) {
        return prev;
      }

      return {
        ...prev,
        title: keyword || "",
        chips: prev.chips.map((value) => ({ ...value, active: prices.includes(value.id) })),
      };
    });
  }, [navigation, searchLocation, setSearch]);

  useEffect(() => {
    if (JSON.stringify(search) !== JSON.stringify(prevSearch.current)) {
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
        console.log("if");
        navigation({ pathname: "/main", search: querys.join("&") });
      } else {
        console.log("else");
        navigation("/main");
      }
    }
    prevSearch.current = search;
  }, [navigation, search]);

  console.log(search);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [search.offset]);

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
