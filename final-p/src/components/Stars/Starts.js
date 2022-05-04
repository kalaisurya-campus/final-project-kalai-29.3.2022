import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function Starts(props) {
    const star = Array(5).fill(0);
    const [current, SetCurrentvalue] = useState(0);

    const handleclick = (val) => {
        SetCurrentvalue(val);
    };
    const colors = {
        orange: "orange",
        grey: "grey",
    };
    return (
        <div>
            Starts
            {star.map((item, index) => {
                return (
                    <div>
                        <FaStar
                            onClick={() => handleclick(index + 1)}
                            style={{
                                cursor: "pointer",
                            }}
                            color={
                                current > index ? colors.orange : colors.grey
                            }
                        />
                    </div>
                );
            })}
            <h1>stars count:{current}</h1>
        </div>
    );
}

export default Starts;
