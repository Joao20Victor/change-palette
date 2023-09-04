

import { ReactNode} from 'react'

interface propsColor  {
  bgcolor: any,
  children: ReactNode
}

export default function Color(props:propsColor){
  return(
    <div className="text-slate-400 h-full w-1/5 flex flex-col justify-center items-center" style={{background: props.bgcolor}} >
      {props.children}
    </div>
  )
}

