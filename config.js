import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"

import { data } from "./utils/data";
export let recently_closed = false;

const defConfig = new DefaultConfig("LowballAssist", "data/settings.json")

defConfig

const config = new Settings("LowballAssist", defConfig, "templates/colorScheme.json", "§c§lLowballer")
.setPos(15, 15)
.setSize(70, 70)
.apply()
.setCommand("lowballer")
.onCloseGui(() => {
    data.recently_closed = true
    data.save()
})
export default () => config.settings