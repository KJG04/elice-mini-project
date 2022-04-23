import { FC } from "react";
import * as S from "./styles";

interface PropsType {
  children?: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

const Chip: FC<PropsType> = ({ children, onClick, active }) => {
  return (
    <S.Container onClick={onClick} className={active ? "active" : undefined}>
      <S.Lable>{children}</S.Lable>
    </S.Container>
  );
};

export default Chip;
