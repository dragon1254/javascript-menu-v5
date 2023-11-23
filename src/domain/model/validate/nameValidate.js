import error from "../constant/error";

class nameValidate{
    checkName(nameArray){
        nameArray.forEach(element => {
            this.nameLength(element);
        });
        if (nameArray.length < 2) {
            throw new Error(error.lessMinCouch);
        }
        if (nameArray.length > 5) {
            throw new Error(error.moreMaxCouch);
        }
    }

    nameLength(element){
        if(element.search(/\s/) != -1) {
            throw new Error(error.space)
        }
        if (element.length < 2) {
            throw new Error(error.lessMinName);
        }
        if (element.length > 4) {
            throw new Error(error.moreMaxName);
        }
    }
}

export default nameValidate;