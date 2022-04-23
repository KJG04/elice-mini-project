import { useCourseList } from "../../queries/Course";
import CourseCard from "../CourseCard";
import * as S from "./styles";

const Body = () => {
  const { data } = useCourseList();

  return (
    <>
      <S.Count>전체 {data?.data.course_count}개</S.Count>
      <S.Grid>
        {data?.data.courses.map((value) => (
          <CourseCard {...value} key={value.id} />
        ))}
      </S.Grid>
    </>
  );
};

export default Body;
