import menu from './menu.js'

function getMenuAndSubmenus(menuId) {
  const result = []
  const transientMenu = [...menu]

  transientMenu.map(currentMenuItem => {
    if (
      currentMenuItem.id === menuId ||
      result.some(menuItem => menuItem.id === currentMenuItem.menuSupId)
    ) {
      result.push(currentMenuItem)
      const submenus = menu.filter(
        menuItem => menuItem.menuSupId === currentMenuItem.id
      )
      transientMenu.push(...submenus)
    }
  })

  return result
}

export default getMenuAndSubmenus
