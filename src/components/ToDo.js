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
    'Read "U.S. Tax law and How to Avoid It"',
    "Memorize the Declaration of Independence",
    "Sew luchador pajamas",
    "Get a Ph.D.",
    "Summon an extraplanar entity",
    "Plan a DnD night",
    "Vaccuum living room",
    "Sweep and mop bathrooms",
    "Create a new board game"
]
const ToDo = (props) => {
    return suggestionArr[(Math.round(Math.random()*suggestionArr.length)-1)];
}

export default ToDo