import React from 'react'
import { useHistory } from "react-router-dom"

import "./wawanTemplate.scss"
const Template = ({
    data,

}) => {
    const history = useHistory();
    return (
        <div className="template-container">
            <div className="template">
                <p className="back" onClick={() => history.goBack()}>Back</p>
                <div className="content" dangerouslySetInnerHTML={{__html : `${data}`}} >
                </div>
            </div>
            

        </div>
    )
}

export default Template