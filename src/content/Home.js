import React from 'react'
//1. props 부모속성 -> 컴포넌트의 재사용
import Movetool from '../ui/Mtitle'

export default function Home({bgcolor, CHblue, vh, children }) {
  return (
    <div style={{ "background" : bgcolor, "color": CHblue, "height": vh }}>

      <Movetool CHblue='#214AEE'>{children}</Movetool>
      
    </div>
  )
}