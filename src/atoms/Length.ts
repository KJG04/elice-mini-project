import { atom } from "recoil";
import atomKeys from "../constants/AtomKeys";

const lengthState = atom<number | undefined>({ key: atomKeys.length, default: undefined });

export default lengthState;
