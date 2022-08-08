const pointInTime = ['Never', 'Always', 'Today', 'Tomorrow', 'From now on', 'In the future', 'Whenever you eat a cockie', 'If you meet your parents'];
const yourAction = ['read', 'laugh at', 'do', 'ask for', 'fall for', 'fall in love with', 'pick a fight  with', 'set boundaries regarding', 'remember', 'dance with', 'leave behind', 'be honest about'];
const whatToActOn = ['what you like!', 'who you love!', 'what you do not like!', 'who you hate!', 'what you think!', 'who you are thinking about right now!', 'the next person you meet'];


function yourFortune() {
    const time = Math.floor(Math.random() * 8);
    const action = Math.floor(Math.random() * 12);
    const subject = Math.floor(Math.random() * 7);
    console.log(`${pointInTime[time]} ${yourAction[action]} ${whatToActOn[subject]}`);
}

yourFortune();