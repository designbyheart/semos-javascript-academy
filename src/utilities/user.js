// const isAdult = (birthYear) => {
//     if (2024 - birthYear > 17) {
//         return true;
//     }

//     return false;
// }

export const isAdult = (birthYear) => {
    return 2024 - birthYear >= 18; 
}

// const isAdult = (birthYear) => 2024 - birthYear >= 18;

export const isPhoneValid = (phoneNumber) => {
    return phoneNumber.length === 10;
}

