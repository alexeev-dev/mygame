import React from 'react'

const SideGroup = ({ title, children }) => (
  <div>
    <h3 className="letf-menu-article text-center">{title}</h3>
    {children}
  </div>
)

export default SideGroup