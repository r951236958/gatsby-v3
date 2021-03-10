import React from 'react'
import { linkList } from '../../config'

const MyLink = () => {
  // const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <div id="mylink" className="group max-w-xl lg:mx-auto lg:max-w-md">
        {linkList.map((items, index) => (
          <>
            <a
              key={index}
              href={items.link}
              className="mt-3 flex items-start rounded-lg border border-gray-700 group-hover:border-cyan-400 px-5 py-3 text-base font-medium text-white group-hover:bg-gray-800 transition ease-in-out duration-150"
            >
              {items.icon}
              {items.name}
            </a>
          </>
        ))}
      </div>
    </>
  )
}
export default MyLink
