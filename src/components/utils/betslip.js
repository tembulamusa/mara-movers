import { 
    getFromLocalStorage, 
    setLocalStorage,
    removeItem
} from './local-storage';

export const addToSlip = (slip) => {
    let current_slip = getFromLocalStorage('betslip');
    console.log("current slip", current_slip);
    if(current_slip){
        current_slip[slip.match_id] = slip;
    } else {
        current_slip = {[slip.match_id] : slip};
    }
    setLocalStorage('betslip', current_slip, 1*60*60*1000);
    return current_slip;
}

export const removeFromSlip = (match_id) => {
   let current_slip = getFromLocalStorage('betslip');
   delete current_slip[match_id];
   setLocalStorage('betslip', current_slip, 1*60*60*1000);
   return current_slip;
}

export const clearSlip = () => {
   removeItem('betslip');
}
export const getBetslip = () => {
    return getFromLocalStorage('betslip');
}

