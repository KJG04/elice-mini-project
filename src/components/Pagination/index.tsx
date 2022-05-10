import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import lengthState from "../../atoms/Length";
import searchState from "../../atoms/Search";
import { useCallback, useMemo } from "react";
import limit from "../../constants/Count";

const Pagination = () => {
  const count = useRecoilValue(lengthState);
  const [search, setSearch] = useRecoilState(searchState);
  const { offset } = search;
  const maxPage = useMemo(() => count && Math.ceil(count / limit), [count]);

  const pages = useMemo(() => {
    if (!count || !maxPage) {
      return undefined;
    }

    const p = [];

    for (let i = offset - 4; i < offset + 5; ++i) {
      if (i < 0) {
        continue;
      }

      if (i >= maxPage) {
        continue;
      }

      p.push(i);
    }

    return p;
  }, [count, maxPage, offset]);

  const onArrow = useCallback(
    (off: number) => {
      if (!count || !maxPage) {
        return;
      }
      if (offset + off < 0) {
        return;
      } else if (offset + off >= maxPage) {
        return;
      }

      const o = offset + off;

      setSearch({ ...search, offset: o });
    },
    [count, maxPage, offset, search, setSearch]
  );

  return (
    <>
      {count && count > 0 ? (
        <S.Container>
          <S.ArrowContainer onClick={() => onArrow(-1)}>
            <FontAwesomeIcon
              color={offset <= 0 ? "#ccc" : "#222"}
              width={14}
              height={14}
              icon={faAngleLeft}
            />
          </S.ArrowContainer>
          {pages?.map((value, index) => (
            <div
              key={`${index}_${value}`}
              onClick={() => setSearch((prev) => ({ ...prev, offset: value }))}
            >
              <S.PageButton className={offset === value ? "active" : ""}>{value + 1}</S.PageButton>
            </div>
          ))}
          {maxPage && (
            <S.ArrowContainer onClick={() => onArrow(1)}>
              <FontAwesomeIcon
                color={offset >= maxPage - 1 ? "#ccc" : "#222"}
                icon={faAngleRight}
              />
            </S.ArrowContainer>
          )}
        </S.Container>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Pagination;
