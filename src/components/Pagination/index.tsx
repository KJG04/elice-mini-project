import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <S.Container>
      <div>
        <S.ArrowContainer>
          <FontAwesomeIcon width={14} height={14} icon={faAngleLeft} />
        </S.ArrowContainer>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <div>
        <S.PageButton>1</S.PageButton>
      </div>
      <S.ArrowContainer>
        <FontAwesomeIcon icon={faAngleRight} />
      </S.ArrowContainer>
    </S.Container>
  );
};

export default Pagination;
