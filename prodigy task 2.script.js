const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const lapButton = document.getElementById('lap-btn');

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;
let isPaused = false;

function updateDisplay() {
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    
isRunning = true;
    
isPaused = false;
    
timerInterval = setInterval(() => 
{
        
milliseconds++;
        
if (milliseconds >= 100) 
{
            
milliseconds = 0;
            
seconds++;
        
}
        
if (seconds >= 60) 
{
            
seconds = 0;
            
minutes++;
        
}
        
updateDisplay();
    
}, 10);

}


function pauseTimer() 
{
    
if (!isRunning || isPaused) return;
    
isPaused = true;
    
clearInterval(timerInterval);

}


function resetTimer() 
{
    
stopTimer();
    
minutes = 0;
    
seconds = 0;
    
milliseconds = 0;
    
updateDisplay();
    
lapList.innerHTML = '';

}


function lapTimer() 
{
    
if (!isRunning || isPaused) return;
    
const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    
const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    
lapList.appendChild(lapItem);

}


function stopTimer() 
{
    
if (!isRunning) return;
    
isRunning = false;
    
isPaused = false;
    
clearInterval(timerInterval);

}


startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTimer);