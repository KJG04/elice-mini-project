import ChipData from "../types/ChipData";
import request from "../utils/axios";

interface Course {
  id: number;
  enroll_type: number;
  is_free: boolean;
  title: string;
  short_description: string;
  logo_file_url: string;
}

interface GetCourseListResponse {
  courses: Course[];
  course_count: number;
}

export const getCourseList = async (
  title: string,
  selected: ChipData[],
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
