import React from "react";
import { useState } from "react";
const [usestate_cards, setUsestate_cards] = useState([]);
const usestate_card_change = () => {
    setUsestate_cards([...usestate_cards, ])
}
const Dynamic_Cards_Usestate = () => {
    return (
        <>
        <div className="usestate-parent">
            {
                usestate_cards.map(ele => {
                    <div className="usestate-card">
                        <h1>Name : {ele.name}</h1>
                    </div>
                })
            }
        </div>
        </>
    )
}
export default Dynamic_Cards_Usestate;