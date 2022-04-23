import { atom } from "recoil";
import atomKeys from "../constants/AtomKeys";
import ChipType from "../types/ChipData";

interface SearchState {
  title: string;
  chips: ChipType[];
  offset: number;
}

const params = new URLSearchParams(location.search);
const priceParams = params.getAll("price");
const keywordParam = params.get("keyword");

const searchState = atom<SearchState>({
  key: atomKeys.search,
  default: {
    title: keywordParam || "",
    chips: [
      {
        id: "free",
        data: { enroll_type: 0, is_free: true },
        active: priceParams.includes("free"),
        text: "무료",
      },
      {
        id: "paid",
        data: { enroll_type: 0, is_free: false },
        active: priceParams.includes("paid"),
        text: "유료",
      },
    ],
    offset: 0,
  },
});

export default searchState;
