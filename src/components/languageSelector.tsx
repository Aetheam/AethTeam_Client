import { FormControl, MenuItem , Select, SelectChangeEvent} from '@mui/material';
import React from 'react';

type LanguageSelectorState = {
    language: string;
}
type LanguageSelectorProps = {
    language: string;
}
export class LanguageSelector extends React.Component<LanguageSelectorState, LanguageSelectorProps>{
    constructor(props: LanguageSelectorProps) {
        super(props);
        this.state = {
            language: props.language
        };
    }
    handleChange = (event: SelectChangeEvent) => {
        this.setState({language: event.target.value});
    };
    render() {
        return (
            <FormControl>
                    <Select
                        value={this.state.language}
                        sx={{color: "#FFFFFF", backgroundColor: "#990909", opacity: "0.90", height: "50%", borderRadius: "20px", marginTop: "auto", marginBottom: "auto", marginRight: "8vh", padding: "1vh" }}
                        onChange={this.handleChange}
                    >
                    <MenuItem value={"English"}>
                        <img src='https://flagsapi.com/US/shiny/64.png' alt="Us flag" style={{height: "1em",  marginRight: "5px"}}/>
                        English
                    </MenuItem>
                    <MenuItem value={"French"}>
                        <img src='https://flagsapi.com/FR/shiny/64.png' alt="Us flag" style={{height: "1em",  marginRight: "5px"}}/> 
                        French
                    </MenuItem>
                </Select>
            </FormControl>
        );
    }
}