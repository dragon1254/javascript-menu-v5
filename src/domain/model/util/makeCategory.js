import SAMPLE from "../constant/menu";
import { MissionUtils, Random } from '@woowacourse/mission-utils'
import number from "../constant/number";

class makeCategory{
    
    getCategory(){
        /*배열길이가 5가 될때까지 반복
        배열 길이가 5가 되면 빠져나와서 배열의 값을 categories의 index로 하여 최종 카테고리 배열 만듦*/
        
        const categories = Object.keys(SAMPLE);
        const temporaryArray = [];
        const categoryArray = []
        while(temporaryArray.length < number.weekday){
            const temporaryNumber = Random.pickNumberInRange(1, 5) - 1;
            this.categoryDuplication(temporaryArray,temporaryNumber)
        }
        temporaryArray.forEach(element => {
            categoryArray.push(categories[element]);
        });
        return categoryArray;
    }

    /*0,4 사이의 숫자룰 받아와서 array에 이미 포함되어 있으면 1개일 때만 array에 푸시
    포함 안 되어 있으면 푸시하여 array를 만든다. 이 임시 array는 카테고리의 인덱스로 활용한다*/ 
    categoryDuplication(temporaryArray,temporaryNumber){
        if(temporaryArray.includes(temporaryNumber)){
            let count = temporaryArray.reduce((cnt, element) => cnt + (temporaryNumber === element), 0);
            if(count === 1){
                temporaryArray.push(temporaryNumber);
            }
        } else if (!temporaryArray.includes(temporaryNumber)) {
            temporaryArray.push(temporaryNumber);
        }
    }

}

export default makeCategory;