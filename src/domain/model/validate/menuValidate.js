import error from "../constant/error";
import SAMPLE from "../constant/menu";
import number from "../constant/number";

class menuValidate{
    menuCheck(notMenu){
        const notMenuArray = notMenu.spilt(',')
        if (notMenuArray.length > number.maxNotMenu) {
            throw new Error(error.moreMaxNotMenu)
        }
        const menuArray = Object.values(SAMPLE);
        menuArray.forEach(element => {
            if(notMenu!=='' && !element.includes(notMenuArray[0])) {
                throw new Error(error.notIncludeMenu)
            }
            if(!element.includes(notMenuArray[1])) {
                throw new Error(error.notIncludeMenu)
            }

        });
    }
}

export default menuValidate;