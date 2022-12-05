import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export function StarContainer() {

    const colors = {
        orange: '#FF8C4B',
        grey: '#F1F1F1;'
    }

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handClickStar = (value: React.SetStateAction<number>) => {
        setCurrentValue(value)
    };

    const handleMouseOver = (value: number | any) => {
        setHoverValue(value)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }


    return (
        <div>
        {stars.map((_, index) => {
            return (
                <FaStar 
                key={index}
                size={24}
                style={{
                    marginRight: 3,
                    cursor: "pointer",
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                onClick={() => handClickStar(index + 1)}
                onMouseLeave={handleMouseLeave}
                />
            )
        })}
    </div>
    )
}

export default StarContainer;


