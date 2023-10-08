import styled, { css } from "styled-components"
import { MyAnimation } from "../styles/animations/Animations"

type StyleBtnPropsType = {
  color?: string
  fontSize?: string
  primary?: boolean
  outlined?: boolean
  active?: boolean
}

export const StyledBtn = styled.button<StyleBtnPropsType>  `
  border: none;
  background-color: ${props => props.color || '#683a3a'};
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  border-radius: 10px;
  &:hover{
    background-color: #31faa1;
  }
  &:last-child{
    background-color: #5426aa;
  }

 //outlined
  ${props => props.outlined && css<StyleBtnPropsType>`
  border: 2px solid ${props => props.color || '#683a3a'};
  color: ${props => props.color || '#683a3a'};
  background-color: transparent;

  &:hover{
    background-color: transparent;
    color: #399239;
    border-color:#399239;
  }
  `}
  
  //primary
  ${props => props.primary && css<StyleBtnPropsType> `
    background-color: ${props => props.color || '#683a3a'};
  color: snow;
  `}

${props => props.active && css<StyleBtnPropsType>`
  box-shadow: 5px 5px 5px 5px rgb(11, 11, 48);
`}

`
