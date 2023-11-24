import { Random } from "@woowacourse/mission-utils";

class recommendMenu{
    constructor(couchNames, menuCategoryObject, notMenuObject){
        this.couchNames = couchNames;
        this.menuCategoryObject = menuCategoryObject; 
        this.notMenuObject = notMenuObject;
    }
    eachMenu(){
        const menuCategoryArray = Object.values(this.menuCategoryObject);
        const recommendMenuArray = []
        menuCategoryArray.forEach((element, index) => {
            const getRecommendMenu = Random.shuffle(menuCategoryArray)[0]
            recommendMenuArray.push(menuCategoryArray[index][getRecommendMenu-1])
        });
        return recommendMenuArray;
    }
}

export default recommendMenu;