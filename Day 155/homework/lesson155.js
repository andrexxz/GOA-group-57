//1
const player1Bag = new Set(["Bloodthorn", "Water", "Glowspore"]);
const player2Bag = new Set(["Water", "Crystal", "Glowspore"]);

function createGuildStash(bag1, bag2) {
    const stash = new Set();

    for (let item of bag1) {
        stash.add(item);
    }

    for (let item of bag2) {
        stash.add(item);
    }

    return stash;
}



const healthPotionRecipe = new Set(["Water", "Bloodthorn", "Crystal"]);

function canCraft(recipe, stash) {
    for (let item of recipe) {
        if (!stash.has(item)) {
            return false;
        }
    }
    return true;
}



function getMissingIngredients(recipe, stash) {
    const missing = new Set();

    for (let item of recipe) {
        if (!stash.has(item)) {
            missing.add(item);
        }
    }

    return missing;
}



function getTradeableItems(bag1, bag2) {
    const result = new Set();

    for (let item of bag1) {
        if (!bag2.has(item)) {
            result.add(item);
        }
    }

    for (let item of bag2) {
        if (!bag1.has(item)) {
            result.add(item);
        }
    }

    return result;
}



const gatheredLoot = ["Wood", "Rotten Flesh", "Bloodthorn", "Mud", "Wood", "Crystal", "Mud"];
const trashItems = new Set(["Rotten Flesh", "Mud"]);

function cleanLoot(lootArray, trashSet) {
    const cleanSet = new Set();

    for (let item of lootArray) {
        if (!trashSet.has(item)) {
            cleanSet.add(item);
        }
    }

    return cleanSet;
}


const guildStash = createGuildStash(player1Bag, player2Bag);
console.log("Guild Stash:", guildStash);

const canMakePotion = canCraft(healthPotionRecipe, guildStash);
console.log("Can craft potion:", canMakePotion);

if (!canMakePotion) {
    console.log("Missing items:", getMissingIngredients(healthPotionRecipe, guildStash));
}

console.log("Tradeable items:", getTradeableItems(player1Bag, player2Bag));

const cleanedLoot = cleanLoot(gatheredLoot, trashItems);
console.log("Clean loot:", cleanedLoot);


//2

const loginLogs = [
  { userId: 1, ip: "192.168.1.10" },
  { userId: 2, ip: "10.0.0.5" },
  { userId: 3, ip: "192.168.1.10" },
  { userId: 4, ip: "172.16.0.1" },
  { userId: 5, ip: "10.0.0.5" }
];

function getUniqueIPs(logs) {
    const ips = logs.map(log => log.ip);

    return new Set(ips);
}



const hackerA_Contacts = new Set(["ip1", "ip2", "ip3"]);
const hackerB_Contacts = new Set(["ip2", "ip3", "ip4"]);
const hackerC_Contacts = new Set(["ip3", "ip5", "ip2"]);

function findMastermind(setA, setB, setC) {
    const result = new Set();

    for (let contact of setA) {
        if (setB.has(contact) && setC.has(contact)) {
            result.add(contact);
        }
    }

    return result;
}



function getUniqueBurnerIPs(setA, setB, setC) {
    const result = new Set();

    function checkUnique(source, other1, other2) {
        for (let item of source) {
            if (!other1.has(item) && !other2.has(item)) {
                result.add(item);
            }
        }
    }

    checkUnique(setA, setB, setC);
    checkUnique(setB, setA, setC);
    checkUnique(setC, setA, setB);

    return result;
}



const traceRoute = ["Server_Alpha", "Server_Beta", "Server_Gamma", "Server_Alpha", "Server_Delta"];

function detectLoop(routeArray) {
    const visited = new Set();

    for (let server of routeArray) {
        if (visited.has(server)) {
            console.log("⚠️ Loop detected at:", server);
            return;
        }

        visited.add(server);
    }

    console.log("No loop detected ✅");
}



const uniqueIPs = getUniqueIPs(loginLogs);
console.log("Unique IPs:", uniqueIPs);

const mastermind = findMastermind(
    hackerA_Contacts,
    hackerB_Contacts,
    hackerC_Contacts
);
console.log("Mastermind contacts:", mastermind);

const burnerIPs = getUniqueBurnerIPs(
    hackerA_Contacts,
    hackerB_Contacts,
    hackerC_Contacts
);
console.log("Unique Burner IPs:", burnerIPs);

detectLoop(traceRoute);