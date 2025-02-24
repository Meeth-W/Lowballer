import { refresh_modules } from "./modules";
import { data } from "./utils/data";

register('step', () => {
    if (!data.recently_closed) return;
    data.recently_closed = false;
    
    refresh_modules();
    data.save()
}).setFps(5)

refresh_modules()