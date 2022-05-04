import React, { useState } from "react";
import "./styles/NawNavbrs.scss";
function NewNvabrs(props) {
    const [slots, SetSlots] = useState(false);

    const chageColorBack = () => {
        if (window.scrollY >= 50) {
            SetSlots(true);
        } else {
            SetSlots(false);
        }
    };

    window.addEventListener("scroll", chageColorBack);
    return (
        <div className={slots ? "navbars-newslist active" : "navbars-newslist"}>
            <div className="lists">
                <div className="klais">kalaisurya</div>
                <div className="insides">
                    <p>news</p>
                    <p>news</p>
                    <p>news</p>
                    <p>news</p>
                    <p>news</p>
                </div>
            </div>
        </div>
    );
}

export default NewNvabrs;
