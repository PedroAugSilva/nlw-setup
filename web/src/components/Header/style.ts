import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Modal = styled(Dialog.Content)`
    width: 100%;
    max-width:480px;
    height: max-content;
    background-color: #18181b;
    padding: 40px;
    border-radius: 16px;
    position: absolute;
    inset: 50%;
    transform: translate(-50%, -50%);
    h1{
      color: white;
    }
    .close{
      position: absolute;
      right: 24px;
      top: 24px;
      color: #A1A1AA;
      :hover{
        color: #E4E4E7;
      }
    }
    .dialogTitle{
      color: #fff;
      font-weight: 600;
      font-size: 32px;
    }
`;
export const Container = styled.header`
  width: 100%;
  max-width: 768px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .button {
    background: none;
    color: #fff;
    border: 1px solid #8b5cf6;
    font-weight: 600;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    gap: 12px;
    :hover {
      border-color: #c4b5fd;
    }
  }
  
`;
