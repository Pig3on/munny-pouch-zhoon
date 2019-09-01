import {AsyncStorage} from 'react-native';

export const TODAY_TOTAL = "TODAY_TOTAL"

import {firestore} from './../config/firebase';

const totalsDocID = 'pm2lIyGtcNY6siRtPUOf';

async function addTotal(value){
    const doc = await firestore.collection('totals').doc(totalsDocID);

    if(doc === null){
        doc = await firestore.collection('totals').add({
            totalsMonth:0,
            totalsDay:0,
            totalsToday:0,
        });
        totalsDocID = doc.id;
    }
    const data = await doc.get();
    let totalToday = data.data().totalToday;
    
    totalToday += parseFloat(value);
    doc.update({
        totalToday:totalToday,
    });    
}

async function getTotals(){
    const doc = await firestore.collection('totals').doc(totalsDocID).get();
    return doc.data();
}

export {
    addTotal,
    getTotals,
}

