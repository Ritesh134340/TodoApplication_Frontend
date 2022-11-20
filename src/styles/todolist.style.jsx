import styled from "styled-components";


export const TodoListWrapper=styled.div`
    th,td{
       
        width:10%;
        height:30px;
        border:2px solid gray;
        border-collapse: collapse;
    }
    td{
       
        padding-left:10px;
       text-align: center;
    }
    table{
        margin:auto;
      
        margin-top:30px;
        width:1300px;
        border-collapse: collapse;
    }
    tr{
        background-color: #d1d1d1;
        
        
    }
   #list-update-button{
        margin-top:40px;
        color:white;
        background-color:rgb(56,159,221);
        padding:6px 8px;
        margin-left:10px;
        border-radius:8px;
        font-size:16px;
        font-weight:bold;
        border:1px solid transparent;
        cursor:pointer;
        margin-bottom:20px;
    }
    #list-delete-button{
        color:white;
        letter-spacing:0.6px;
        font-family:"Roboto",sans-serif;
        margin-top:40px;
        background-color:red;
        padding:6px 8px;
        margin-left:10px;
        border-radius:8px;
        font-size:16px;
        font-weight:bold;
        border:1px solid transparent;
        cursor:pointer;
    }
    #update-link{
        color:white;
        text-decoration:none;
        letter-spacing:0.6px;
        font-family:"Roboto",sans-serif
     }
     .list-title{
        font-size:18px;
        font-weight:700
     }
     #task-pending{
    
        font-size:55px;
        color:yellow;
     }

     #task-done{
     
        font-size:55px;
        color:green;
     }
   
`