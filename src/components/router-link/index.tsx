import { LinkTypes } from "@/types"
import { NavLink } from "react-router-dom"

export const Link = ({ path, icon, title }: LinkTypes) => {
  return (
    <NavLink to={path} className="y-center border py-[13px] px-4 gap-4">
      <img src={icon} alt="" />
      <span className="text-sm font-medium leading-[22px] tracking-[0.2] text-left">{title}</span>
    </NavLink>
  )
}
