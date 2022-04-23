import ChipType from "../types/ChipData";
import Course from "../types/Course";
import request from "../utils/axios";

interface GetCourseListResponse {
  courses: Course[];
  course_count: number;
}

export const getCourseList = async (
  title: string,
  selected: ChipType[],
  offset: number,
  count: number
) => {
  const url = "/academy/course/list/";

  const filterConditions = JSON.stringify({
    $and: [{ title: `%${title}%` }],
    $or: [...selected],
  });

  const params = { filter_conditions: filterConditions, offset, count };

  return await request.get<GetCourseListResponse>(url, { params });
};
