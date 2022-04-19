import theme from "../../styles/theme";
import { ContainerInput, InputPrimary, LabelInput } from "./style";



export function Input({label, placeholder, onChange, ...props}){
  return(
  <ContainerInput>
    <LabelInput>{label}</LabelInput>
    <InputPrimary placeholder={placeholder}
                  onChange={onChange}
                  {...props}
                  />
  </ContainerInput>
  )
}