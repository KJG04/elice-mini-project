import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getCourseList } from "../apis/Course";
import searchState from "../atoms/Search";
import count from "../constants/Count";
import queryKeys from "../constants/QueryKeys";

export const useCourseList = () => {
  const search = useRecoilValue(searchState);

  return useQuery([queryKeys.courseList, search.title, search.offset, search.chips], () =>
    getCourseList(search.title, search.chips, search.offset * count, count)
  );
};
