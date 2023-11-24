
 import React from "react"
import Header from "../header"
export default function BaseLayout({ children }: any) {
  return (
    <>
    
      <Header/>
      <main>{children}</main>
    </>
  )
}