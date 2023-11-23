import { MissionUtils } from '@woowacourse/mission-utils'
import message from '../model/constant/message';

const inputView = {
    async inputName(callback){
        await MissionUtils.Console.readLine(message.couchNames,callback)
    },
    async inputNotMenu(element, callback){
        await MissionUtils.Console.readLine(`${element}${message.notEat}`,callback)
    }
}

export default inputView;