/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Dashboard from '../Dashboard'
import { Button, Box, Container } from '@material-ui/core';
import { mainListItems, secondaryListItems } from '../listItems';
import Typography from '@material-ui/core/Typography';




function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          ShopStream
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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