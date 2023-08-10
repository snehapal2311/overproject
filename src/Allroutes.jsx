import React from 'react'
import { Routes, Route } from "react-router-dom";
import OverProtocol from "./Pages/overProtocol/overprotocol"
import Mobile from "./Pages/mobile/mobile"
import PC from "./Pages/pc/pc"
import Media from "./Pages/media/media"
import Contact from "./Pages/contact/contact"
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OverProtocol />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="pc" element={<PC />} />
      <Route path="media" element={<Media />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

  )
}
export default Allroutes