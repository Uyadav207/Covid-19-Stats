import React from "react";

function Header() {
  return (
    
        <div class="topnav">
            <a href="#"><img  class="icon-spin" src="https://img.icons8.com/nolan/96/coronavirus.png" width="50" /></a>
            <a className="space" href="#">COVID-19</a>
            <div className="spacer">          
            <a className="space" href="https://www.who.int/">WHO</a>
            <a className="space" href="https://www.mohfw.gov.in/">Government Helplines</a>
        </div>
        </div>

  );
}

export default Header;
