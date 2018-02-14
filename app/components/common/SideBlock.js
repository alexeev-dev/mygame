import React from 'react'

const SideBlock = ({title, children}) => (
  <div className="be-vidget">
    <h3 className="letf-menu-article">{title}</h3>
    {children}
  </div>
)

export default SideBlock
