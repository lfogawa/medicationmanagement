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
   #root{
       margin:0 auto;
   }

   h1{
        color: #084420;
        display: flex;
        justify-content: center;
        font-size: 6em;
   }

   form{
        margin: 1em;
        padding: 1em;
   }
`