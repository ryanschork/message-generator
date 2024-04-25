const randomFirstGrab = ["It is true,", "You better believe", "It is incredible that", "Jedi sense a disturbance in the force when", "The rotation of the earth stops when", "America has promised to switch to the metric system when", "The pyramids predict the world will enter a golden age when"]

const randomCritic = ["The Pope", "Charlie Brown", "Tony Hawk", "the cast of Friends", "Kermit the Frog", "Bob, your Uncle,", "James Bond", "The Chicago Bulls", "Bruce Willis", "Steven Segal"]

const randomAction =["listens to", "tours the world with", "arm wrestles", "plays professional Counterstrike with", "has three children with", "climbs Mt Kilimanjaro with", "acts on information from", "loses their favorite Pokemon card while white water rafting with", "saves earth from a meteor by blasting"];

const randomBandNames = ["Spoon", "Guns and Roses", "Red Hot Chili Peppers", "Third Eye Blind", "Westlife", "The Weekend", "Pearl Jam", "Tool", "Dashboard Confessional", "Warren Zevon", "Mariah Carey", "Michael Jackson", "Prince", "Taylor Swift", "Stone Temple Pilots", "Peter Gabriel", "The Toadies", "Local H"];

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateMessage = () => {
    const firstGrab = getRandom(randomFirstGrab);
    const critic = getRandom(randomCritic);
    const action = getRandom(randomAction);
    const bandName = getRandom(randomBandNames);

    return `${firstGrab} ${critic} ${action} ${bandName}`;
}

console.log(generateMessage());