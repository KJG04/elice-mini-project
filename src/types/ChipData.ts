export type ChipId = "free" | "paid";

export interface ChipData {
  enroll_type: number;
  is_free: boolean;
}

interface ChipType {
  id: ChipId;
  data: ChipData;
  active: boolean;
  text: string;
}

export default ChipType;
