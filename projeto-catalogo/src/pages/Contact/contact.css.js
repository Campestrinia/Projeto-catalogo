import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import depositphotos from './depositphotos.png';


const GlobalStyle = createGlobalStyle`
  body {
  margin: 0px;
  padding: 0px;
  }
`;



const BoxAll = styled.div`
    background-color: rgba(45, 86, 219);;
    height: 120%;
    width: 100%;
    box-sizing: border-box
    
    
`;

const Box1= styled.div`
    background-image: linear-gradient(359deg, #340bd9, #121a7f);
    width: 100%;
    height: 200px;
    margin: auto;
    display: flex;
    
}



`;

const Text= styled.div`
    margin: 0;
    color: #fbfbfb;
    font-family: system-ui;
    margin-left: 60px;
    h1{
        margin: 0px;
        margin-top: 20px;
        margin-block-end: 10px;
        border-left: ridge #ff7c00;

    }
    p{
        margin: 0px;
    }

`;


const Img= styled.div`
    background-image: url(${depositphotos});
    width: 100%;
    display: flex;
        padding-left: 40px;
    justify-content: center;
    img{

    }
    
`


const Box2= styled.div`
     width: 356px;
    height: 200px;
    background-color: #2121c9;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);

    ul{
    list-style: none
    }
    list-style: none;
    a{
    text-decoration: none;
    margin: 10px;
    color: white;
    font-family: monospace;
    font-size: 17px;
    height: 10px;
    
    }
    `;
    
const Box2mini= styled.div`
    text-align: center;
    
    h3{
    font-family: sans-serif;
    margin: 0px
        font-family: sans-serif;
    margin: 0px;
    border-bottom: ridge #ff7c00;
    color: #faebd7e8;
    
    }

    
`    

const Box3= styled.div`
    width: 100%;
    height: 100%;
     background-color: #2121c9;
    margin-right: 10%;
     margin-top: 20px;
     box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
     
    p{
     font-family: system-ui;
    }
     h4{
        text-align: center;
        font-family: sans-serif;
     }
    H6{
     text-align: center;
    font-size: 20px;
    font-family: monospace;
    color: #faebd79c;

        
    }
   
`;


const Boxin= styled.div`
    display: flex;

`

const Box3Hidde= styled.div`
 

`

const Conteiner= styled.div`
    height: 80%;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
    height: 80%;
    background-color: #ffffffed;
    border-radius: 20px;
    padding: 5px;
    margin-block-end: 10px;
    -
`

const Cont= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

   
        
`

const BoxUlt= styled.div`
      background-color: white;
    width: 400px;
    height: 151px;
    margin-left: 100px;
    margin-right: 100px;
     padding: 16px 24px;
     margin-block-end: 50px;
      box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
    h4{
        margin: 0px;
            margin-top: 1px;
        margin-left: 5px;
        font-family: system-ui;
    }
        h3{
        font-family: cursive;
        color: #ff6c00;
        margin-right: 195px;
        
        }
        h5{
            font-size: 15px;
            font-family: system-ui;
            margin-top: 20px;
            color: #0dd70d;
        
        }


    
`

const Tend= styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
   
       h2{
        font-family: sans-serif;
        color: cornsilk;
        border-bottom: solid orange;
        width: 300px;
        
        text-align: center
     }
        p{
        margin-left: 10px;

        }
`
const Boxn= styled.div`
    display: flex;

`



    


export { GlobalStyle,BoxAll, Box1, Text, Img, Box2, Box3, Boxin, Box2mini, Box3Hidde, Conteiner, Cont, BoxUlt, Tend, Boxn};