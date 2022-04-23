import CourseCard from "../CourseCard";
import * as S from "./styles";

const Body = () => {
  return (
    <>
      <S.Count>전체 77개</S.Count>
      <S.Grid>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </S.Grid>
    </>
  );
};

export default Body;
