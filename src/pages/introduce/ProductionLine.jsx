import React from 'react';
import { ProductMain } from '../../images';

function ProductionLine() {
    return(
        <div>
            <div className="main-container">
                <img src={ProductMain}></img><label>회사소개</label>
            </div>
            ProductionLine
        </div>
    );
}

export default ProductionLine;