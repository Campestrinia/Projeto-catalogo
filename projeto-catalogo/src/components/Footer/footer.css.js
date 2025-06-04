import styled from "styled-components";

// const CantainerDown = styled.body`
//    height: 100%;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
// `;

const Container = styled.div`
  display: flex;
  background-color: #222731;
  justify-content: space-between;
`;

const Separator = styled.div`
  color: #f2f4f9;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 15px;
`;

const NoLink = styled.a`
  text-decoration: none;
  color: #f2f4f9;
  cursor: default;
  margin: 5px;
`;

export { Container, Separator, NoLink };
