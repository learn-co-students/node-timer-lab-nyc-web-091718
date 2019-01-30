process.argv.shift()
process.argv.shift()
let timeLeft = parseInt(process.argv)
if (process.argv[0].includes("min")) {
  timeLeft *= 60
}
let id = global.setInterval(()=>{
  timeLeft-=1
  if (timeLeft<0) {
    global.clearInterval(id)
  }else{
    console.log("Left:", timeLeft+"s");
  }
},1000)
