import * as React from 'react';
import "./../css/header.css"
import { LanguageSelector } from '../languageSelector';
//import AethTeamLogo from "./../assets/AethTeamLogo.png"
export default function ButtonAppBar() {
  return (
      <div className='header_1'>
        <div className='header_block_1'>
          <h4 className='header_text_1'>Aeth Team</h4>
          <div className='header_1_buttons'>
            <div className='header_1_languageSelector'>
              <LanguageSelector language='Francais'/>
            </div>
            <a href='#'>login</a>
            <a href='#'>register</a>
          </div>
          </div>
      </div>
    );
}