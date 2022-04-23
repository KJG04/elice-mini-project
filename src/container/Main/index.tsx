import Body from "../../components/Body";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import SearchArea from "../../components/SearchArea";
import * as S from "./styles";

const MainContainer = () => {
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
