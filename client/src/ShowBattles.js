import React from "react";
import { Card, Button, Image } from 'semantic-ui-react';
import mainImage from './main.jpg';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './App.css'

class ShowBattles extends React.Component {

    state = {
        allBattlesProps: [],
        isShow: false,
        mainData: {}
    }

    changeIsShowHandler = (row) => {
        this.setState({ isShow: !this.state.isShow, mainData: row });
    }

    render() {
        let mainData = this.state.mainData;
        let color="";

        return (
            <div>
                <div className="container">
                    {!this.state.isShow ?
                        <Card.Group>
                            {this.props.allBattles?this.props.allBattles.map((row, key) => {
                                return (
                                    <div className="respo" key={key}>
                                        <Card>
                                            <Card.Content>
                                                <Image
                                                    src={mainImage}
                                                />
                                                <hr />
                                                <Card.Header>{row.battle_number}.{row.name}</Card.Header>
                                                <Card.Meta>{row.year}</Card.Meta>
                                                <Card.Description>
                                                    <em>{row.attacker_king} vs {row.defender_king}</em>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button basic color='green' onClick={() => this.changeIsShowHandler(row)}>
                                                        Start Fight!
                                                </Button>
                                                </div>
                                            </Card.Content>
                                        </Card>

                                    </div>
                                )
                            }):null}
                        </Card.Group> :
                        <div>

                            <Paper elevation={3}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow style={{backgroundColor:'#ffee33'}}>
                                                <TableCell style={{fontSize:'30px'}}><em>All Data of Battle Number {mainData['battle_number']}</em></TableCell>
                                                <TableCell style={{fontSize:'30px'}} align="right"><Button color="red" onClick={()=>this.changeIsShowHandler({})}>Go Back</Button></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {Object.keys(mainData).map(function (key,id) {
                                                if(id%2==0){
                                                    color='#33ab9f';
                                                }
                                                else{
                                                    color='#af52bf';
                                                }
                                                return (
                                                    <TableRow key={key} style={{backgroundColor:color}}>
                                                        <TableCell component="th" scope="row" style={{fontSize:'20px'}}>{key.replace(/_/g," ").toUpperCase()}</TableCell>
                                                        <TableCell align="right" style={{fontSize:'20px'}}><em>{mainData[key]}</em></TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

                        </div>

                    }
                </div>
            </div >

        )
    }
}

export default ShowBattles;