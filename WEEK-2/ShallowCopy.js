const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// 1. Create a shallow copy of user
let copyUser={...user}

//2. Change:
//name in the copied object
// copyUser.name='ram'
// preferences.theme in the copied object
copyUser.preferences.theme='light'
//Log both original and copied objects
console.log(user)
console.log(copyUser)
//Observe what changes and what doesn’t