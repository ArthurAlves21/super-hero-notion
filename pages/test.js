const element = document.getElementsByClassName('sqdOP  L3NKy    _8A5w5     ')
const element1 = document.getElementsByClassName('aOOlW -Cab_    ')

function UnFollow(){
  const element = document.getElementsByClassName('sqdOP  L3NKy    _8A5w5     ')
  const element1 = document.getElementsByClassName('aOOlW -Cab_    ')

  setTimeout(()=>{
    element[2].click()
  },700)

  setTimeout(()=>{
   try{
     element1[0].click()
   } catch(e){
     element[2].click()
   }
  },1200)

}
for(let i = 0; i<100; i++){
  setTimeout(()=>{
    unfollow()
  }, 6000)
}


