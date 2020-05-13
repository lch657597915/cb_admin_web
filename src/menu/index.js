import Menu from "./menu";
import { hasPermissions } from "@/utils/dataStorage.js";
export default Menu;
function filterMenu(menu) {
  let newMenu = {};
  for (let menuKey in menu) {
    let menuItem = menu[menuKey];
    if (menuItem.permissionsKey) {
      if (hasPermissions(menuItem.permissionsKey)) {
        newMenu[menuKey] = menu[menuKey];
        if (newMenu[menuKey].hasOwnProperty("children")) {
          for (let key in newMenu[menuKey].children) {
            if (
              newMenu[menuKey].children[key].permissionsKey &&
              !hasPermissions(newMenu[menuKey].children[key].permissionsKey)
            ) {
              delete newMenu[menuKey].children[key];
            }
          }
        }
      }
    } else {
      //不受权限控制的菜单直接过
      newMenu[menuKey] = menu[menuKey];
    }
  }
  return newMenu;
}
