import menuValidate from "../model/validate/menuValidate";
import nameValidate from "../model/validate/nameValidate";
import inputView from "../view/inputView";

class controller{
#couchNames

#notMenuObject = {}

    constructor(){

    }

    async run(){
        await this.inputName();
    }

    async inputName(){
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
                validateMenu.menuCheck(notMenu);
                this.#notMenuObject[element] = notMenu;
            } catch(err){
                console.log(err)
                return await this.cannotEat();
            }
        })
    }
}

export default controller;