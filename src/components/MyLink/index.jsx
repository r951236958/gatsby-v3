// import { Divider } from "@react-md/divider"
import { TextIconSpacing } from "@react-md/icon"
// import { List } from "@react-md/list"
// import { MenuItemLink } from "@react-md/menu"
// import { Link as RouterLink } from "gatsby"
import React from "react"
import { linkList } from "../../config"

const MyLink = () => {
  // const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <ul className="lg:w-1/2 w-full border border-gray-400 border-opacity-60 divide-y-2 divide-gray-400 divide-opacity-60 rounded my-3 mx-auto">
        {linkList.map((items, i) => (
          <>
            <li
              className="my-2 text-gray-300 hover:text-white hover:bg-gray-900 hover:bg-opacity-30"
              key={`my-link-${i}`}
            >
              <a
                href={items.link}
                className="mx-2 text-base flex px-3 py-4 pl-3"
              >
                <TextIconSpacing className="mr-4" icon={items.icon}>
                  {items.name}
                </TextIconSpacing>
              </a>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
export default MyLink
