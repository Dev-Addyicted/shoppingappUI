import React from 'react';
import { navData } from './navData';
import { Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    {
                        navData.map((item) =>
                            <Grid item xs={item.xs}>


                                <Link to={item.path}>
                                    <Button variant='contained' color='success' fullWidth>{item.label}</Button>
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Nav;