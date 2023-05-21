
import React from "react"

type MyProps = { 
    language: string
 };
type MyState = { 
    language: string 
};
export class LanguageSelector extends React.Component<MyProps, MyState> {

    constructor(props: any){
        super(props)
        this.state = {
            language: "Français"
        }
    }
    handleLanguageChange = (event: any) => {
        console.log(event.target.innerText)
        this.setState({
            language: event.target.innerText
        })
    }
    render(){
        return(
            <div className="switch-lang">
                <div className="current-lang">
                    <p className="lang-text">{this.state.language}</p>
                </div>
                <div className="lang-dropdown">
                    <div className="selecting-lang">
                        <img className="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png" alt="Español flag" />
                        <p className="lang-text" onClick={this.handleLanguageChange}>Español</p>
                    </div>
                    <div className="selecting-lang">
                        <img className="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png"   alt="Español flag"/>
                        <p className="lang-text" onClick={this.handleLanguageChange}>Français</p>
                    </div>
                    <div className="selecting-lang">
                        <img className="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Italy.png" alt="Español flag" />
                        <p className="lang-text" onClick={this.handleLanguageChange}>Italiano </p>
                    </div>
                    <div className="selecting-lang">
                        <img className="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Germany.png" alt="Español flag" />
                        <p className="lang-text" onClick={this.handleLanguageChange}>Deutsch</p>
                    </div>
                </div>
            </div>   
        )          
    }
}