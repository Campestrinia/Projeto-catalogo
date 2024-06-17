import styled from "styled-components";

// const CantainerDown = styled.body`
//    height: 100%;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
// `;

const Container = styled.div`
  display: flex;
  background-color: rgba(45, 86, 219);
  justify-content: space-between;
  `;

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 15px
  `;

const NoLink = styled.a`  
    text-decoration: none;
    color: inherit;
    cursor: default;
    margin: 5px;
    `;

export { Container, Separator, NoLink };