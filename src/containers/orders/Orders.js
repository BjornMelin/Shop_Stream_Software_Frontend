/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { mainListItems, secondaryListItems } from '../listItems';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';





export default function Orders() {

    return (
    <div>
        <h1> INVENTORY</h1>
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
    </div>
    );
}