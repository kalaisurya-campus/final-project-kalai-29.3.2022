import React, { useState } from "react";
import "./styles/Tabsactive.scss";
function Tabsactive(props) {
    const [index, SetIndex] = useState(0);
    return (
        <div className="main-tab">
            <div className="table-list">
                <div className="table-header-list">
                    <div
                        className={`table-header ${
                            index === 0 ? "actives" : "null"
                        } `}
                        onClick={() => SetIndex(0)}
                    >
                        tab1
                    </div>
                    <div
                        className={`table-header ${
                            index === 1 ? "actives" : "null"
                        } `}
                        onClick={() => SetIndex(1)}
                    >
                        tab2
                    </div>
                    <div
                        className={`table-header ${
                            index === 2 ? "actives" : "null"
                        } `}    
                        onClick={() => SetIndex(2)}
                    >
                        tab3
                    </div>
                    <div
                        className={`table-header ${
                            index === 3 ? "actives" : "null"
                        } `}
                        onClick={() => SetIndex(3)}
                    >
                        tab4
                    </div>
                </div>
                <div className="table-body-content">
                    <div className="table-body" hidden={index !== 0}>
                        table1
                    </div>
                    <div className="table-body" hidden={index !== 1}>
                        table2
                    </div>
                    <div className="table-body" hidden={index !== 2}>
                        table3
                    </div>
                    <div className="table-body" hidden={index !== 3}>
                        table4
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabsactive;
