import { Console } from "@woowacourse/mission-utils";
import message from "../model/constant/message";

const outputView = {
    start(){
        Console.print(message.start)
    },
    intro(){
        Console.print(message.resultIntro);
    },
    printDate(){
        Console.print(message.date);
    },
    printCategory(keyMenuCategories){
        Console.print(`[ 카테고리 | ${keyMenuCategories[0]} | ${keyMenuCategories[1]} | ${keyMenuCategories[2]} | ${keyMenuCategories[3]} | ${keyMenuCategories[4]} ]`)
    },
    printMenu(eachMenuObject){
        const keyEachMenuObject = Object.keys(eachMenuObject);
        const valueEachMenuObject = Object.values(eachMenuObject);
        keyEachMenuObject.forEach((element,index) => {
            Console.print(`[ ${element} | ${valueEachMenuObject[index][0]} | ${valueEachMenuObject[index][1]} | ${valueEachMenuObject[index][2]} | ${valueEachMenuObject[index][3]} | ${valueEachMenuObject[index][4]} ]`)
        });
        Console.print(message.end);
    }
}

export default outputView;