import React from "react";
const suggestionArr = [
    "Walk the dog",
    "Clean the Kitchen",
    "Unload dishwasher",
    "Fold laundry",
    "Clean bathroom",
    "Wash windows",
    "Wash car",
    "Meal prep",
    "Iron clothes",
    "Do laundry",
    "Pick up dry cleaning",
    "learn U.S. Tax law",
    "Memorize the Declaration of Independence",
    "Sew luchador pajamas",
    "Get a Ph.D.",
    "Summon an extraplanar entity",
    "Plan a DnD night",
    "Vaccuum living room",
    "Sweep and mop bathrooms",
    "Create a new board game"
]
const ToDo = () => {
    let index = (Math.round(Math.random()*suggestionArr.length)-1);
    return suggestionArr[index];
}

export default ToDo