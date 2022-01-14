import * as S from "./Modal.styled";

const Modal = (props) => {
  return (
    <S.Modal onClick={props.closeModal}>
      <S.Container>
        <img src={props.url} alt="" />
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
