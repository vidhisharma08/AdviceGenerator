import React from 'react'
const advices=[
   "Focus audience needs",
"Highlight unique features",
"Simplify technical terms",
"Use visuals effectively",
"Emphasize sustainability goals",
"Ensure clean layout",
"Incorporate real examples",
"Proofread for clarity",
"Prioritize concise messaging",
"Balance text and graphics"

]
    const RandomAdviceLS=({onSelectAdvice})=>{
        const getRandomAdvice=()=>{
             const randomIndex=Math.floor(Math.random()*advices.length);
             return advices[randomIndex];
        }
        const handleClick=()=>{
            const advice =getRandomAdvice();
            onSelectAdvice(advice)
        }
        return(
            <>
            <button onClick ={handleClick}>Generate Advice</button>
            </>
        )
    }
    export default RandomAdviceLS