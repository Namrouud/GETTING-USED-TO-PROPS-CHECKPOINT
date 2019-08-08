import React from 'react';



function Title (props)
{
let small=props.small;


return (
    <div>
        <h1 style={{color:"red", fontSize:(!small)? "20px" :  "10px"}/*if(attribue!== small) {return font-size=20px } else {return font-size=10px}*/ }
>{props.title}</h1>

    </div>
)

}
export default Title;