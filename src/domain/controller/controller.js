import nameValidate from "../model/validate/nameValidate";
import inputView from "../view/inputView";

class controller{
#couchNames

    constructor(){

    }

    async run(){
        await this.inputData();
    }

    async inputData(){
        await inputView.inputName((getName)=>{
            try{
                const nameArray = getName.split(',')
                const validateName = new nameValidate();
                validateName.checkName(nameArray);
                this.#couchNames = nameArray;
            } catch(err) {
                console.log(err)
                return this.inputData()
            }
        });
    }
}

export default controller;