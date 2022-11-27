import React, { Fragment } from 'react'

interface ShiftListProps {
    items: {id: number, name: string}[];
};

const DisplayShiftList: React.FC<ShiftListProps> = (props) =>{
    return (
        <Fragment>
            <ul>
            {props.items.map(shift => (
                <li key={shift.id}>
                    <span>{shift.name}</span>
                </li>
            ))}
            </ul>
        </Fragment>
    );
};

export default DisplayShiftList;