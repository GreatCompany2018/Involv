import * as React from "react";
import styles from '../AppCustomizer.module.scss';

// interface MyProps {
//     ...
//   }
  
  interface IFontsize {
    fontSize: string;
  }

  interface IIstoggleOn {
    isToggleOn: boolean;
  }

export default class ButtonsFontsize extends React.Component<{},IFontsize> {
    constructor(props) {
        super(props);
        this.state = {fontSize: "Normal"};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount to memorize fontsize button when reopening page
    componentDidMount() {
        let fontSize = localStorage.getItem("fontSize");
        console.log(fontSize);
        let element = document.getElementsByTagName("body")[0];
        element.classList.remove(`Involv${this.state.fontSize}Mode`);
        element.classList.add(`Involv${fontSize}Mode`); 
        this.setState(() => ({
            fontSize: fontSize,
          }));

    };

    handleClick(fontSize) {
        this.setState(() => ({
          fontSize: fontSize,
        }));

        localStorage.setItem("fontSize", String(fontSize));

        let element = document.getElementsByTagName("body")[0];
        element.classList.remove(`Involv${this.state.fontSize}Mode`);
        element.classList.add(`Involv${fontSize}Mode`); 

        console.log("state",this.state.fontSize);
        console.log('fontsize',fontSize);
      }

    render() { 
    return (
        <div className= {styles.flexContainer}> 
            <button className= {`${styles.button} ${this.state.fontSize === "Normal" ? styles.active : ''}`} onClick={() => this.handleClick("Normal")}>A</button> 
            <button className= {`${styles.button} ${this.state.fontSize === "Large" ? styles.active : ''}`} onClick={() => this.handleClick("Large")}>A</button> 
            <button className= {`${styles.button} ${this.state.fontSize === "ExtraLarge" ? styles.active : ''}`} onClick={() => this.handleClick("ExtraLarge")}>A</button> 
        </div>
        );
    }    
}

export class ButtonAlternate extends React.Component<{},IIstoggleOn> {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true}; 

  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount() {
  let isToggleOn = localStorage.getItem("InvolvAlternateMode") === "true";
 
  let element = document.getElementsByTagName("body")[0];
  element.classList.remove("InvolvAlternateMode" + this.state.isToggleOn);
  element.classList.add("InvolvAlternateMode" + isToggleOn);
  this.setState(() => ({
      isToggleOn: isToggleOn,
    }));
};

handleClick(isToggleOn) {
  this.setState(() => ({
    isToggleOn: isToggleOn,
  }));

  localStorage.setItem("InvolvAlternateMode", String(isToggleOn));

  console.log("state",this.state.isToggleOn);
  console.log('isToggleOn',isToggleOn);

  let element = document.getElementsByTagName("body")[0];
  element.classList.remove("InvolvAlternateMode" + this.state.isToggleOn);
  element.classList.add("InvolvAlternateMode" + isToggleOn);
}

  render() {
    return(
      <div className= {`${styles.flexContainer} ${styles.alternateBtnWidth}`}>
        <button className= {`${styles.button} ${this.state.isToggleOn === true ? styles.active : ''}`} 
          onClick={() => {
            if (this.state.isToggleOn === true) {
              this.handleClick(false); 
            }
              else {
                this.handleClick(true);
              }
            }
          }
          >Alternate Mode</button> 
    </div>
    )
  }
}



  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );