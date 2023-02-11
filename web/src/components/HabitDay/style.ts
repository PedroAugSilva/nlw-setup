import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Trigger = styled(Popover.Trigger)`
    width: 40px;
    height: 40px;
    border: 3px solid;
    border-radius: 8px;
`;
export const Content = styled(Popover.Content)`
    min-width: 320px;
    padding: 24px;
    border-radius: 16px;
    background-color: #18181b;
    color: #fff;
    display: flex;
    flex-direction: column;

    .weekDay{
        font-weight: 500;
        color: #A1A1AA;
    }

    .day{
        margin-top: 4px;
        font-weight: 800;    
        font-size: 32px;
    }

    .checkbox-area{
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
        
`
export const CheckboxRoot = styled(Checkbox.Root)`
    display: flex;
    align-items: center;
    gap: 12px;
    span{
        font-weight: 600;
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

