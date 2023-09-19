export default function filterSlotsDay(slotList:any){
const day1:any=[]
const day2:any=[]
const day3:any=[]

slotList.forEach((slot:any)=>{
    switch(slot.day) {
        case 1:{
            day1.push(slot)
        }
        case 2:{
            day2.push(slot)
        }
        case 3:{
            day3.push(slot)
        }
    }
})
return [day1,day2,day3]
}