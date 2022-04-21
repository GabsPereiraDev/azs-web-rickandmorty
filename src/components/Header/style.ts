import styled from "styled-components";


interface IStyle {
    show: boolean;
}



export const Container = styled.div<IStyle>`
width: 100%;
padding:1rem;
background: green;
display: flex;
align-items: center;
transition: all 0.4s;
h2{
    color:#fff;
}
.search{
      margin-left:auto;
      input{
          width: 26rem;
      }
      ul{
        position: absolute;
    display: flex;
    flex-direction: column;
    width:350px;
    min-height: 300px;
    max-height: 500px;
    padding: .5rem;
    top: 3.5rem;
    right:33.1%;
    background-color: #fff;
    height:auto;
    box-shadow: 1px 5px 10px #000;
    overflow-y: scroll;
    scroll-behavior: smooth;
    transition: all 0.4s;
    z-index:10;
    img{
        width:10rem;
    }
    h4{
        transition: all 0.4s;
            &:hover{
                text-decoration: underline;
            }
        }
    li{
        width:100%;
        display: flex;
        align-items: start;
        justify-content: start;
        margin-top:.5rem;
        span{
            margin:.5rem 2rem;
        }
        
    }
  }

      }
  
div{
    margin-left: auto;
    svg{
        width:3rem;
        height:3rem;
    }
  .container{
    position: absolute;
    display: flex;
    flex-direction: column;
    width:350px;
    min-height:300px;
    max-height:300px;
    padding: .5rem;
    top: ${props => props.show ? "4rem" : "7rem"};
    right:3rem;
    background-color: #fff;
    height:auto;
    box-shadow: 1px 5px 10px #000;
    overflow-y: scroll;
    scroll-behavior: smooth;
    transition: all 0.4s;
    opacity: ${props => props.show ? "1" : "0"};
    z-index:${props => props.show ? "12" : "-3"};
    img{
        width:10rem;
    }
    h4{
        transition: all 0.4s;
            &:hover{
                text-decoration: underline;
            }
        }
    div{
        width:100%;
        display: flex;
        align-items: start;
        justify-content: start;
        margin-top:.5rem;
        span{
            margin:.5rem 2rem;
        }
        
    }
  }
  

}

`