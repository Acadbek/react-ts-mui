import { SidebarProps } from "@/types"
import logo from '@/assets/icons/logo.svg'
import { Fragment } from "react"
import { Link } from "@/components/router-link"
import { dashboardIcon } from '@/assets/icons'

export const Sidebar = ({ }: SidebarProps) => {
  return (
    <Fragment>
      <aside className="w-[250px] px-4 pt-4 border h-screen fixed top-0">
        <img className="ml-4" src={logo} alt="Logo" />
        <div className="line"></div>
        <p className="text-xs mb-4 text-[#94A3B8] font-medium mt-8 leading-[19px] tracking-[1px] text-left">MENU</p>
        <Link path="/" title='Dashboard' icon={dashboardIcon} />
        <Link path="/products" title='Products' icon={dashboardIcon} />
      </aside>

    </Fragment>
  )
}
