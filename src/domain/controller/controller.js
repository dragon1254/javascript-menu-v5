import makeCategory from "../model/util/makeCategory";
import menuValidate from "../model/validate/menuValidate";
import nameValidate from "../model/validate/nameValidate";
import inputView from "../view/inputView";
import recommendMenu from "../model/util/recommendMenu";
import outputView from "../view/outputView";

class controller{
#couchNames

#notMenuObject = {}

#menuCategoryObject

    async run(){
        await this.inputName();
        this.menuCategory();
        this.eachRecommendMenu();
    }

    async inputName(){
        outputView.start();
        await inputView.inputName(async (getName)=> {
            try{
                const nameArray = getName.split(',')
                const validateName = new nameValidate();
                validateName.checkName(nameArray);
                nameArray.forEach(async (element) => {
                    await this.cannotEat(element)
                });
                this.#couchNames = nameArray;
                
            } catch(err) {
                console.log(err)
                return await this.inputData()
            }
        });
    }
    async cannotEat(element){
        await inputView.inputNotMenu(element,async (notMenu)=>{
            try{
                const validateMenu = new menuValidate();
                const getNotMenu = notMenu
                validateMenu.menuCheck(getNotMenu);
                this.#notMenuObject[element] = getNotMenu;
            } catch(err){
                console.log(err)
                return await this.cannotEat();
            }
        })
    }
    menuCategory(){
        const makeMenuCategory = new makeCategory()
        const getCategoryArray = makeMenuCategory.getCategory();
        this.#menuCategoryObject = getCategoryArray;
    }
    eachRecommendMenu(){
        const recommend = new recommendMenu(this.#couchNames, this.#menuCategoryObject, this.#notMenuObject)
        const eachMenuObject = {}
        this.#couchNames.forEach(element => {
            eachMenuObject[element] = recommend.eachMenu()
        });
        this.printAll(eachMenuObject);
    }
    printAll(eachMenuObject){
        outputView.intro();
        outputView.printDate();
        const keyMenuCategories = Object.keys(this.#menuCategoryObject);
        outputView.printCategory(keyMenuCategories);
        outputView.printMenu(eachMenuObject);
    }
}

export default controller;