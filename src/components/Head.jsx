import  Head  from "next/head"

export default function ComponentHead({title}){
  return(
    <Head>
        <title>{title}</title>
    </Head>
  )
}