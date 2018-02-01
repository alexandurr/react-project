export {isAdult, canDrink};

const isAdult = (x) => {
    if (x >= 18) {
        return true;
    }else{
        return false;
    }
};

const canDrink = (y) => {
    if (y >= 21) {
        return true;
    }else{
        return false;
    }
};