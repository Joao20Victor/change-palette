'use client'
import {useState} from 'react'
import Color from "./components/Color"

export default function Home() {
  const palettes = [
    {
      Color1: "#F2F2F2",
      Color2: "#BFBFBF",
      Color3: "#8C8C8C",
      Color4: "#595959",
      Color5: "#262626",
    },
    {
      Color1: "#F29F05",
      Color2: "#F27405",
      Color3: "#F24405",
      Color4: "#F20505",
      Color5: "#0D0D0D",
    },
    {
      Color1: "#212940",
      Color2: "#245CA6",
      Color3: "#2594D9",
      Color4: "#27B9F2",
      Color5: "#27CDF2",
    },
    {
      Color1: "#D744E4",
      Color2: "#57005E",
      Color3: "#CC00DE",
      Color4: "#591C5E",
      Color5: "#9D00AB",
    },
    {
      Color1: "#E0A5A3",
      Color2: "#DA7E78",
      Color3: "#CE534E",
      Color4: "#BB0102",
      Color5: "#8E1715",
    },
    {
      Color1: "#A69668",
      Color2: "#A69D85",
      Color3: "#8C6C30",
      Color4: "#59380E",
      Color5: "#401E01",
    },
    {
      Color1: "#A65C32",
      Color2: "#73412F",
      Color3: "#BF6E50",
      Color4: "#D9C1B8",
      Color5: "#BF6854",
    },
    {
      Color1: "#ADBF7E",
      Color2: "#737F54",
      Color3: "#E8FFA8",
      Color4: "#3A402A",
      Color5: "#D0E597",
    },
  ]
  const [color1, setColor1] = useState("#BFBFBF")
  const [color2, setColor2] = useState("#595959")
  const [color3, setColor3] = useState("#BFBFBF")
  const [color4, setColor4] = useState("#595959")
  const [color5, setColor5] = useState("#BFBFBF")

  function Change(){
    let getRandomNumber = Math.floor(Math.random() * palettes.length)
    const copiedPalette = palettes[getRandomNumber]
    setColor1(copiedPalette.Color1)
    setColor2(copiedPalette.Color2) 
    setColor3(copiedPalette.Color3) 
    setColor4(copiedPalette.Color4) 
    setColor5(copiedPalette.Color5)
  }

  return (
    <div className='flex h-screen' >
      <Color bgcolor={color1} >
        <h1 className="bg-slate-200 p-2 rounded" >{color1}</h1>
      </Color>
      <Color bgcolor={color2} >
        <h1 className="bg-slate-200 p-2 rounded" >{color2}</h1>
      </Color>
      <Color bgcolor={color3} >
        <button className="p-3 bg-slate-200 text-black rounded" onClick={Change} >Change</button>
        <h1 className="bg-slate-200 p-2 rounded" >{color3}</h1>
      </Color>
      <Color bgcolor={color4} >
        <h1 className="bg-slate-200 p-2 rounded" >{color4}</h1>
      </Color>
      <Color bgcolor={color5} >
        <h1 className="bg-slate-200 p-2 rounded" >{color5}</h1>
      </Color>
    </div>
  )
}
