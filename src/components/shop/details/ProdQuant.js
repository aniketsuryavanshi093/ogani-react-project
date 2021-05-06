import React from 'react'

function ProdQuant({clickmin , clickmax , inpval}) {
    return (
        <div className="quantity">
        <div className="pro-qty">
            <span onClick={clickmin}> - </span>

            <input type="text" value={inpval}/>
            <span   onClick={clickmax}> + </span>

        </div>
    </div>
    )
}

export default ProdQuant
