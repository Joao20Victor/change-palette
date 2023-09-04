

import { ReactNode} from 'react'

interface propsAlgo  {
  style: string,
  children: ReactNode
}

export default function Algo(props:propsAlgo){
  return(
    <div className="text-slate-400 h-1/5" style={{background: props.style}} >
      {props.children}
    </div>
  )
}

