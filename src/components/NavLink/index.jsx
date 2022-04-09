import Link from 'next/link'
import { TextLink } from './style'

export function NavLink({textLink,href, ...props}){
  return(
    <Link href={href}>
      <TextLink {...props}>
          {textLink}
      </TextLink>
    </Link>
  )
}