import { createGlobalStyle } from "styled-components"
import { StylesProps } from "./interface"

export default createGlobalStyle<StylesProps>`
   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: 'Arial', 'Open Sans', sans-serif; 
   }

   h1{
        color: #31955F;
        display: flex;
        justify-content: center;
        font-size: 2em;
        margin: 1em;
   }

   h2{
        color: #084420;
   }

   form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em;
   }

   form > p{
        font-size: 12px;
   }
`