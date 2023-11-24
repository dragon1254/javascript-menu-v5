import error from "../constant/error";
import SAMPLE from "../constant/menu";
import number from "../constant/number";

class menuValidate{
    menuCheck(notMenu){
        let notMenuArray = []
        if(notMenu.includes(',')){
            notMenuArray = notMenu.spilt(',')
        } else if(!notMenu.includes(',')){
            notMenuArray.push(notMenu)
        }
        if (notMenuArray.length > number.maxNotMenu) {
            throw new Error(error.moreMaxNotMenu)
        }
        this.allMenuCheck(notMenuArray)
    }
    
    allMenuCheck(notMenuArray){
        const makeMenuArray = Object.values(SAMPLE);
        let menuArray = []
        makeMenuArray.forEach(element => {
            let allMenu = element.split(', ')
            menuArray.push(...allMenu)
        });
        notMenuArray.forEach(element => {
            if(!menuArray.includes(element)){
                throw new Error(error.notIncludeMenu);
            }
        });

    }
}

export default menuValidate;