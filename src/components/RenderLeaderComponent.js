import React from 'react';
import { Media } from 'reactstrap';


export default function RenderLeader({leader}){
    return (
        <Media key={leader.id}>
        <Media left="true" href="#">
            <Media object src={leader.image} alt={leader.name} />
        </Media>
        <Media body>
            <Media heading>
           {leader.name}
            </Media>
            {leader.description}    
        </Media>
    </Media>
    );
}