import React from "react";
import Postcards from "./Postcards";
import { Data } from "./PostData";

function Home(props) {
    return (
        <div>
            {Data.map((items, index) => {
                return <Postcards post={items} key={index} />;
            })}
        </div>
    );
}

export default Home;
