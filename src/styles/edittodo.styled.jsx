import styled from "styled-components";

export const EditTodoWrapper=styled.div`
     
     margin-top:80px;
 

    .main-edit-div{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width:500px;
        margin:auto;
        box-sizing: border-box;
        padding-left:20px;
        padding-bottom:30px;
        padding-top:20px;
        border-radius:13px;
    }
    .edit-form{
      padding-left:20px;
    }
    #toggle-button{
       background-color: ${({status,show})=>status ? "rgb(15,165,77)" : !show? "rgb(196,196,196)":"red"};
       color:white;
    }
    
    .form-div{
     
      

    }
    .editTitle{
        font-size:25px;
        font-family:"Roboto",sans-serif;
        letter-spacing: 0.6px;
        font-weight:700;

    }
    input{
        height:40px;
        width:350px;
        box-sizing: border-box;
        font-size:17px;
        padding-left:10px;
        margin-top:5px;
        margin-bottom:10px;
        border-radius:5px;
        outline:none;
        border:1px solid gray;
    }
    .status-heading{
        margin-top:10px;
        margin-bottom:15px;
        font-size:17px;
        font-weight:500;
        font-family:"Roboto",sans-serif

    }
    .edit-button{
        margin-top:40px;
        background-color: none;
        padding:12px 25px;
        margin-left:10px;
        border-radius:8px;
        font-size:18px;
        font-weight:bold;
        border:1px solid transparent;
        cursor:pointer;

    }
    .edit-span{
        font-weight:400;
        padding-bottom:15px;

    }
    #edit-button-show{
        background-color:${({show})=>show ? "rgb(15,165,77)" : "rgb(66,163,218)"
} ;
        color:white;

    }
    
`