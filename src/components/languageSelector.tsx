import { FormControl, MenuItem , Select, SelectChangeEvent} from '@mui/material';
import React from 'react';
import { makeStyles} from '@mui/material/styles';

type LanguageSelectorProps = {
    language: string;
}

export default function LanguageSelector (props: LanguageSelectorProps)  {
    
    const [language, setLanguage] = React.useState<string>(props.language);
   const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
    return (
        <FormControl>
                <Select
                    value={language}
                    sx={{
                        color: "#FFFFFF", 
                        opacity: "0.90", 
                        height: "50%", 
                        borderRadius: "20px", 
                        marginTop: "auto", 
                        marginBottom: "auto", 
                        marginRight: "8vh", 
                        padding: "1vh",
                        backgroundColor: "transparent"
                    
                    }}
                    onChange={handleChange}
                >
                <MenuItem value={"En"}
                   
                >
                    <img src='https://flagsapi.com/US/shiny/64.png' alt="Us flag" style={{height: "1em",  marginRight: "5px"}}/>
                    English
                </MenuItem>
                <MenuItem 
                    value={"Fr"} 
                    sx={{
                        borderRadius: "20px", 
                      
                        "&:selected": {
                            backgroundColor: "red"
                        } 
                        }}
                >
                    <img src='https://flagsapi.com/FR/shiny/64.png' alt="Fr flag" style={{height: "1em",  marginRight: "5px"}}/> 
                    Francais
                </MenuItem>
            </Select>
        </FormControl>
    );
}
