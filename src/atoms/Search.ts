import { atom } from "recoil";
import atomKeys from "../constants/AtomKeys";
import ChipType from "../types/ChipData";

interface SearchState {
  title: string;
  chips: ChipType[];
  offset: number;
}

const searchState = atom<SearchState>({
  key: atomKeys.search,
  default: {
    title: "",
    chips: [
      { id: "free", data: { enroll_type: 0, is_free: true }, active: false, text: "무료" },
      { id: "paid", data: { enroll_type: 0, is_free: false }, active: false, text: "유료" },
    ],
    offset: 0,
  },
});

export default searchState;
