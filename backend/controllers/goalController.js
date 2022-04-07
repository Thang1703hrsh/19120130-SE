const asyncHandle = require('express-async-handler')


//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = asyncHandle(async (req , res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc Set goal
//@route POST/api/goals
//@access Private
const setGoals = asyncHandle(async (req , res) => {
    if(!req.body.text)
    {
        // res.status(400).json({message: 'Please add a test field'})
        res.status(400)
        throw new Error('Please add a text field')
    
    }

    res.status(200).json({message: 'Set goals'})
})


//@desc Update goals
//@route PUT/api/goals/ :id
//@access Private
const updateGoal = asyncHandle(async (req , res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


//@desc Delete goal
//@route DELETE/api/goals/:id
//@access Private
const deleteGoal = asyncHandle(async (req , res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports= {
    getGoals,
    setGoals, 
    updateGoal,
    deleteGoal,
}