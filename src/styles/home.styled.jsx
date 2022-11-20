import styled from "styled-components";

export const HomeWrapper=styled.div`
    font-family:sans-serif;
    letter-spacing: 0.8px;
    display:flex;
    padding-top:150px;
    justify-content: center;
    align-items: center;
    input{
        font-family:"Roboto",sans-serif;
        border-radius:13px;
        height:45px;
        width:450px;
        padding-left:15px;
        font-size:17px;
        
    }
    button{
        font-size:35px;
        color:white;
        padding-left:10px;
         border:1px solid red;
        background-color: transparent;
        border:none;
    }

`

export const MainHomeDiv=styled.div`
    height:100vh;
    width:100vw;
    background-position:center;
     background-image:url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
  
`