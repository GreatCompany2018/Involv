import * as React from "react";
import styles from '../AppCustomizer.module.scss';
import ButtonsFontsize from './Buttons';
import { ButtonAlternate } from "./Buttons";

export default function Topbar() {
    return (
        <div className= {styles.app}>
            <div className= {styles.top}>
                <ButtonsFontsize />
                <ButtonAlternate />
            </div>
        </div>    
    );
}