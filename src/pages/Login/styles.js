import styled from 'styled-components';

export const Container = styled.div`
  *{
    margin-top: 5px;
    color:  #003333;
  }
  div{
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 10px;
   }
  section{
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 370px;
    padding: 30px; 
    border-radius: 20px;
    background: rgba(255,255,255,0.6);
   }
   input{
    margin-bottom: 5px;
    margin-top: 0;
    height: 35px;
    width: 370px;
    background: #FFFFFF;
    border-radius: 10px; 
   }
   button{
    margin-top: 9px;
    width: 370px;
    height: 50px;
    background:  #004d4d;
    border-radius: 50px;
    color: #FFFFFF;
    font-size: 1em;
   }
   .link{
     text-align: center;
     margin-top: 9px;
   }
   a{
     text-align: center;
   }
  @media (max-width: 600px) {
    section{
    height: 320px;
    width: 330px;
    }
    input{
    width: 320px;
    }
    button{
    width: 320px;
   }
  }
  @media (max-width: 400px) {
    section{
    width: 270px;
    }
    input{
    width: 260px;
    }
    button{
    width: 260px;
   }
  }
  @media (max-width: 330px) {
    section{
    height: 300px;
    width: 220px;
    }
    input{
    width: 220px;
    }
    button{
    width: 220px;
   }
  }
`;
