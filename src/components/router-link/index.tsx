import { LinkTypes } from "@/types"
import { NavLink } from "react-router-dom"

export const Link = ({ path, icon, title, className }: LinkTypes) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div style={{ backgroundColor: isActive ? '#edf2f7' : '' }} className="group y-center mb-1 hover:bg-[#edf2f7] rounded-xl py-[13px] px-4 gap-4" {...className}>
          <img className="sidebar-icon" src={icon?.props?.src} alt="Sidebar Icon" />
          <span className="text-sm font-medium capitalize leading-[22px] tracking-[0.2] text-left">{title}</span>
        </div>
      )}
    </NavLink >
  )
}
