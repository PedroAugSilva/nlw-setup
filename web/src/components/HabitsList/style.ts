import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Container = styled.div`

`

export const CheckboxRoot = styled(Checkbox.Root)`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
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