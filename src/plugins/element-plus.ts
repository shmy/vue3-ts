import 'element-plus/lib/theme-chalk/el-reset.css';
import {App} from "@vue/runtime-core";
import {ElButton, ElEmpty} from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'

// 设置语言
locale.use(lang)
const elementPlusPlugin = {
    install: (app: App) => {
        app.use(ElButton)
            .use(ElEmpty);
    }
};

export default elementPlusPlugin;