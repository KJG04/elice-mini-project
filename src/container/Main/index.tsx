import Body from "../../components/Body";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import SearchArea from "../../components/SearchArea";

const MainContainer = () => {
  return (
    <div>
      <SearchArea />
      <Filter />
      <Body />
      <Pagination />
    </div>
  );
};

export default MainContainer;
