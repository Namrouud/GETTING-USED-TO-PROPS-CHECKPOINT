import React from "react";
import Photo from './Photo';
import Title from './Title';
import cat from './cat.png';


function Wrapper ()
{


    return (
        <div>
            <Photo image={cat}/>
            <Title title="My name here"/>
            <Title title="My job here" small />
        </div>
    )


}

export default Wrapper;