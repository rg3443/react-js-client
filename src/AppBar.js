import { AppBar } from "@material-ui/core"
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
//import AppBar from '@material-ui/core/AppBar';
import CConsole from "./CConsole";

class CAppBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <AppBar>
            <Toolbar>
                <AppBar position="static">
                    <CConsole />
                </AppBar>
            </Toolbar>
                <Toolbar>
                    <AppBar position="static">
                        <CConsole />
                    </AppBar>
                </Toolbar>
                <Toolbar>
                    <AppBar position="static">
                        <CConsole />
                    </AppBar>
                </Toolbar>
            </AppBar>
        );
    }

}
export default CAppBar;