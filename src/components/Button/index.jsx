import { ButtonContainer, TextButton } from './style'

export function Button({titleButotn, ...props}){
    return(
      <ButtonContainer {...props}>
        <TextButton>{titleButotn}</TextButton>
      </ButtonContainer>
    )
}