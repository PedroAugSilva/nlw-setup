import React from 'react'
import { Check } from "phosphor-react";
import { CheckboxRoot, Container } from './style'
import * as Checkbox from "@radix-ui/react-checkbox";

const CheckBox = () => {
  return (
    
    <CheckboxRoot>
      <div className="external-checkbox">
        <Checkbox.Indicator>
          <Check size={20} color="#fff"/>
        </Checkbox.Indicator>
      </div>
      <span>Estudar</span>
    </CheckboxRoot>
  )
}

export default CheckBox