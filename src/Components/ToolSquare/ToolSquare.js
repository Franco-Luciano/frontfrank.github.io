import './ToolSquare.scss';
import React from 'react';
import htmlLogo from '../../images/htmlLogo.png';
import pythonLogo from '../../images/pythonLogo.png';
import cssLogo from '../../images/cssLogo.png';
import reactLogo from '../../images/reactLogo.png';
import javascriptLogo from '../../images/javascriptLogo.png';
import jsonLogo from '../../images/jsonLogo.png';
import vegasLogo from '../../images/vegasLogo.png';
import sassLogo from '../../images/sassLogo.png';
import githubLogo from '../../images/githubLogo.png';
import gatsbyLogo from '../../images/gatsbyLogo.png';
import figmaLogo from '../../images/figmaLogo.png';
import netlifyLogo from '../../images/netlifyLogo.png';
import vtexLogo from '../../images/vtexLogo.png';
import photoshopLogo from '../../images/photoshopLogo.png';
import arcaplanetLogo from '../../images/arcaplanetLogo.png';
import acctLogo from '../../images/acctLogo.png';

function ToolSquare({ lenguage, color, type, image, fontSize, imageHeight, imageWidth }) {
    let imageStats;

    switch (image) {
        case "htmlLogo":
            imageStats = htmlLogo;
            break;
        case "pythonLogo":
            imageStats = pythonLogo;
            break;
        case "cssLogo":
            imageStats = cssLogo;
            break;
        case "reactLogo":
            imageStats = reactLogo;
            break;
        case "javascriptLogo":
            imageStats = javascriptLogo;
            break;
        case "jsonLogo":
            imageStats = jsonLogo;
            break;
        case "vegasLogo":
            imageStats = vegasLogo;
            break;
        case "sassLogo":
            imageStats = sassLogo;
            break;
        case "githubLogo":
            imageStats = githubLogo;
            break;
        case "gatsbyLogo":
            imageStats = gatsbyLogo;
            break;
        case "figmaLogo":
            imageStats = figmaLogo;
            break;
        case "netlifyLogo":
            imageStats = netlifyLogo;
            break;
        case "vtexLogo":
            imageStats = vtexLogo;
            break;
        case "photoshopLogo":
            imageStats = photoshopLogo;
            break;
        case "arcaplanetLogo":
            imageStats = arcaplanetLogo;
            break;
        case "acctLogo":
            imageStats = acctLogo;
            break;
        default:
            imageStats = "";
    }
    return (
        <div className="ToolSquare">
            {type === "lenguage" ? <div style={{ backgroundColor: `${color}` }} className="ToolSquare-container">
                <img style={{ width: `${imageWidth}`, height: `${imageHeight}` }} className="ToolSquare-container_image" src={`${imageStats}`} />
                <p style={{ fontSize: `${fontSize}` }} className="ToolSquare-container_text">{lenguage}</p>
            </div> :
                <div style={{ backgroundColor: `${color}` }} className="ToolSquare-containerBig">
                    <img style={{ width: `${imageWidth}`, height: `${imageHeight}` }} className="ToolSquare-containerBig_image" src={imageStats} />
                    <p style={{ fontSize: `${fontSize}` }} className="ToolSquare-containerBig_text">{lenguage}</p>
                </div>}
        </div >
    );
}
export default ToolSquare;
