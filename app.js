let goodmorningAudio = new Audio('http://www.fromtexttospeech.com/output/0334116001556306502/47052496.mp3');
goodmorningAudio.play();
alert('Good Morning Avenger, please update today\'s task list. You can give up to 5 tasks with task description and at what time you want to finish the task.')

let x = prompt('Please add Task 1','Clean my desk, etc.,');
let y = prompt('what time you want to finish your task 1, 24 hours system', '14')
let t = new Date()
let timenow = t.getHours()
document.getElementById('timenow').innerHTML =t;
document.getElementById('task1').innerHTML =x;
let z = y-timenow;
document.getElementById('time1').innerHTML =z;
//document.body.innerHTML = x; 

//document.body.innerHTML = timenow;

// if (y == timenow) {
// alert('complete your task 1')
// let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
//     audio.play();
// }



