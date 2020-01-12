import React, { useLayoutEffect, useState } from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// Nav brand logo
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

// Tool Tip helper functions
export const tooltipInsert = navLink => {
  const tooltip = <Tooltip>{navLink}</Tooltip>
  return tooltip
}

export const addToolTip = (tip, icon) => {
  return (
    <OverlayTrigger
      trigger="hover"
      placement="bottom"
      overlay={tooltipInsert(tip)}>
      {icon}
    </OverlayTrigger>
  )
}