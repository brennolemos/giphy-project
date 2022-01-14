import styled from "styled-components";

export const Modal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10001;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 3rem 0;
  animation: fadeIn 0.3s forwards;
  width: 100%;
  height: 100%;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3D(0, -4rem, 0);
    }
    to {
      opacity: 1;
      transform: translate3D(0, 0, 0);
    }
  }
`;
