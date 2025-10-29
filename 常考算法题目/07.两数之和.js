function twoSum( numbers ,  target ) {
    let res = [];
    let map = new Map();
    numbers.forEach((element, index) => {
        map.set(element, index);
    })
    for(let i = 0; i < numbers.length; i++){
        let j = map.get(target - numbers[i]);
        if(j && j !== i && i < j){
            res.push(i + 1);
            res.push(j + 1);
            break;
        }
    }
    return res;
}