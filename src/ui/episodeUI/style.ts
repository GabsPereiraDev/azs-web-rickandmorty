import styled from "styled-components";

export const Container = styled.div`
background-image: url("https://p4.wallpaperbetter.com/wallpaper/666/73/120/tv-show-rick-and-morty-artistic-cartoon-wallpaper-preview.jpg");
background-size: cover;
background-position: center;
position: relative;
margin: 1em;
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: end;
color:#fff;
a{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:start;
    padding: .5rem;
    z-index:3;
    position: relative;
}
div{
    z-index: 3;
    padding: .5rem;
}
&:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    z-index: 2;
    top:0;
    left: 0;
}
p{
    margin: 1rem 0;
}

`