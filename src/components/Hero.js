import React from 'react';

const Hero = ({heroName}) => {
    if(heroName === 'Jocker'){
        throw new Error('not a herror')
    }; 
    return (
        <div>
           {heroName} 
        </div>
    );
}

export default Hero;
