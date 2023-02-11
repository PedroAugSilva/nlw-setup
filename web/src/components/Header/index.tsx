import React from "react";
import headerLogo from "../../assets/logo.svg";
import { Plus, X } from "phosphor-react";
import { Container, Modal } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import NewHabitForm from "../NewHabitForm";

const Header = () => {
  return (
    <Container>
      <img src={headerLogo} alt="" />

      <Dialog.Root>

        <Dialog.Trigger className="button" type="button">
          <Plus color="#8B5CF6" size={20} />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay  style={styleDialog.overlay}/>
          <Modal >

            <Dialog.Close className="close">
            <X size={24} arial-label="fechar"/>
            </Dialog.Close>
            <Dialog.Title className="dialogTitle">
              Criar hábito
            </Dialog.Title>
            <NewHabitForm/>
          </Modal>
        </Dialog.Portal>

      </Dialog.Root>
    </Container>
  );
};

const styleDialog:any = {
  overlay: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'fixed',
    inset: 0,
  },
  modal: {
    width: '100%',
    maxWidth:'480px',
    backgroundColor: '#18181b',
    padding: '40px',
    borderRadius: '16px',
    position: 'absolute',
    inset: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default Header;
