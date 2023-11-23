import { MissionUtils } from '@woowacourse/mission-utils'
import message from '../model/constant/message';

const inputView = {
    async inputName(callback){
        await MissionUtils.Console.readLine(message.couchNames,callback)
    }
}

export default inputView;