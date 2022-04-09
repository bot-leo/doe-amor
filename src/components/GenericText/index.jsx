import { SingleText } from "./style"

export function GenericText({text, 
                             href, 
                             style, 
                             children, ...props}){
  return(
    <SingleText {...props} style={style}>
        {text || children}
    </SingleText>
  )
}