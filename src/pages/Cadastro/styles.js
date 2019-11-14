import styled from 'styled-components';

export const Container = styled.div`
*{
  margin-top: 10px;
  color:   #003333;
  }
  div{
  text-align: center;
  font-size: 1.3em;
  }
  section{
  height: 370px;
  width: 350px;
  padding: 30px;
  background: rgba(255,255,255,0.6);
  border-radius: 20px;
  color: #FFFFFF;
  }
  input{
  margin : 0 0 15px 0;
  border-radius: 10px;
  height: 35px;
  width: 350px;
  }
  button{
  width: 350px;
  height: 50px;
  background:  #004d4d;
  border-radius: 50px;
  font-size: 1em;
  color: #FFFFFF; 
  margin: 0 0 13px 0; 
  }
  @media (max-width: 500px) {
    section{
    height: 370px;
    width: 315px;
    padding: 20px;
    }
    input{
    margin : 0 0 15px 0;
    height: 35px;
    width: 310px;
    }
    button{
    width: 310px;
    height: 50px;
    font-size: 1em; 
    margin: 0 0 13px 0; 
    }
  } 
  @media (max-width: 398px){
    div{
    text-align: center;
    margin-bottom: 5px;
    }
    section{
    height: 370px;
    width: 240px;
    padding: 20px;
    }
    button{
    width: 230px;
    height: 50px;
    margin: 0 0 10px 0; 
    }
    input{
    border-radius: 10px;
    height: 35px;
    width: 230px;
    margin : 0 0 15px 0;
    }
  }
`;