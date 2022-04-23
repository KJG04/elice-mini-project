import { useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";
import lengthState from "../../atoms/Length";
import count from "../../constants/Count";
import { useCourseList } from "../../queries/Course";
import CourseCard from "../CourseCard";
import CourseCardSkeleton from "../CourseCardSkeleton";
import * as S from "./styles";

const Body = () => {
  const { data, isLoading, isError, error } = useCourseList();
  const setLength = useSetRecoilState(lengthState);

  const skeleton = useMemo(
    () =>
      Array(count)
        .fill(0)
        .map((_, index) => <CourseCardSkeleton key={index} />),
    []
  );

  useEffect(() => {
    setLength(data?.data.course_count);
  }, [data, setLength]);

  if (isError) {
    return <div>오류 발생: {`${error}`}</div>;
  }

  return (
    <>
      <S.Count>전체 {data && `${data.data.course_count}개`}</S.Count>
      <S.Grid>
        {isLoading && skeleton}
        {data?.data.courses.map((value) => (
          <CourseCard {...value} key={value.id} />
        ))}
      </S.Grid>
    </>
  );
};

export default Body;
