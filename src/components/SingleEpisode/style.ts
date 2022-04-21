import styled from "styled-components";


interface IStyleProps {
  color: string | undefined;
}

export const Container = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
padding: 2rem;
display: flex;
flex-direction: column;
align-items:center;
h2{
    margin: 2rem;
}
button{
  border: 0;
  background-color:0;

}
svg{
    width: 2rem;
    height: auto;
    color:gold
  }
.container{
    width: 100%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
  align-items:center;

   > div{
      display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

}

`

export const Card = styled.div<IStyleProps>`
    margin: 1rem 0;
    width: 300px;
    display:flex;
    img{
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
    }
    div{
      text-align: start;
      margin-left: 2rem;
      flex-direction: column;
      justify-content:start
    }
  strong{
    color:${props => props.color}
  }
`