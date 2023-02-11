import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 24px 0px;
    gap: 8px;
    label{
        font-weight: 500;
        color: #fff;
    }
    input[type=text]{
        background-color: #27272A;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        border: none;
        outline: 0;
        font-size: 16px;
        margin-bottom: 8px;
        ::placeholder{
            color: #A1A1AA;
        }
    }
    .checkbox-area{
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .confirm-button{
        margin-top: 24px;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background-color: #16A34A;
        font-weight: 500;
        color: #fff;
        font-size: 16px;
        gap: 12px;
        transition: .2s ease-in-out;
        :hover{
            background-color: #22C55E;
        }
    }
`
export const CheckboxRoot = styled(Checkbox.Root)`
    display: flex;
    align-items: center;
    gap: 12px;
    span{
        
        font-size: 16px;
        color: #fff;
    }
    .external-checkbox{
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #18181B;
        border: 2px solid #27272A;
        overflow: hidden;
        [data-state="checked"]{
            background-color: #22C55E ;
            width: 150%;
            height: 150%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

