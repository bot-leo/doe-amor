import { SingleText } from "./style"

export function GenericText({text,children, ...props}){
  return(
    <SingleText {...props}>
      {text || children}
    </SingleText>
  )
}