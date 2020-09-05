import React from "react";
import "./Competencies.css";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";


export default function Competencies() {

    
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">

            <div className="skills-bar">
                <h1 className="skills-heading">Technical Competencies</h1>
                
                    <div className="row">
                        {skillsSection.competencies.map(competency => {
                            return (
                                <div className="col">
                                    <h4>{competency.title}</h4>
                                    <ul className="comp">
                                        {competency.content.map(skill => <li>{skill}</li>)}
                                    </ul>
                                </div>
                            );
                        })}
                     </div>
            </div>
        </div>
        </Fade>
    );
  }