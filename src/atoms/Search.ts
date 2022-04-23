import { atom } from "recoil";
import atomKeys from "../constants/AtomKeys";
import ChipData from "../types/ChipData";

interface SearchState {
  title: string;
  chips: ChipData[];
  offset: number;
}

const searchState = atom<SearchState>({
  key: atomKeys.search,
  default: { title: "", chips: [], offset: 0 },
});

export default searchState;
