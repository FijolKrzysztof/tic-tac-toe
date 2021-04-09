import React, { Component } from 'react';
import './App.css';
import {Container, Col, Row, Button, Badge, Navbar} from 'react-bootstrap';
import xmark from './xmark.png';
import circle from './circle.png';

let takenFields = [0,0,0,0,0,0,0,0,0,0];
let turn;
let proceed = true;

class App extends Component {
  handleClick = (e) => {
    if(proceed === true){
      proceed = false;
      let id = parseInt((e.target.id).slice(2), 10);
      let pass = true;
      if(takenFields[id] !== 0) pass = false;
      if(pass !== false){
        document.getElementById('x-' + id).style.display = 'inline';
        document.getElementById('x-' + id).style.animation = 'animateVisibility 1s';
        setTimeout(() => {
          document.getElementById('x-' + id).style.opacity = '1';
          document.getElementById('x-' + id).style.animation = '';
          takenFields[id] = 1;
          new Promise(resolve => {
            this.checkResult();
            resolve();
          })
          .then(() => {
            this.computerMove();
          })
        }, 900);
      }
      else proceed = true;
    }
  }

  handleRestart = () => {
    document.getElementById('o-1').style.display = 'none';
    document.getElementById('o-2').style.display = 'none';
    document.getElementById('o-3').style.display = 'none';
    document.getElementById('o-4').style.display = 'none';
    document.getElementById('o-5').style.display = 'none';
    document.getElementById('o-6').style.display = 'none';
    document.getElementById('o-7').style.display = 'none';
    document.getElementById('o-8').style.display = 'none';
    document.getElementById('o-9').style.display = 'none';
    document.getElementById('x-1').style.display = 'none';
    document.getElementById('x-2').style.display = 'none';
    document.getElementById('x-3').style.display = 'none';
    document.getElementById('x-4').style.display = 'none';
    document.getElementById('x-5').style.display = 'none';
    document.getElementById('x-6').style.display = 'none';
    document.getElementById('x-7').style.display = 'none';
    document.getElementById('x-8').style.display = 'none';
    document.getElementById('x-9').style.display = 'none';
    
    document.getElementById('o-1').style.opacity = '0';
    document.getElementById('o-2').style.opacity = '0';
    document.getElementById('o-3').style.opacity = '0';
    document.getElementById('o-4').style.opacity = '0';
    document.getElementById('o-5').style.opacity = '0';
    document.getElementById('o-6').style.opacity = '0';
    document.getElementById('o-7').style.opacity = '0';
    document.getElementById('o-8').style.opacity = '0';
    document.getElementById('o-9').style.opacity = '0';
    document.getElementById('x-1').style.opacity = '0';
    document.getElementById('x-2').style.opacity = '0';
    document.getElementById('x-3').style.opacity = '0';
    document.getElementById('x-4').style.opacity = '0';
    document.getElementById('x-5').style.opacity = '0';
    document.getElementById('x-6').style.opacity = '0';
    document.getElementById('x-7').style.opacity = '0';
    document.getElementById('x-8').style.opacity = '0';
    document.getElementById('x-9').style.opacity = '0';

    takenFields = [0,0,0,0,0,0,0,0,0,0];
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.opacity = '0';
    this.componentDidMount();
  }

  announceResult = (e) => {
    proceed = false;
    if(e === 0){
      document.getElementById('result').innerText = 'DRAW';
    }
    if(e === 1){
      document.getElementById('result').innerText = 'WIN';
    }
    if(e === 2){
      document.getElementById('result').innerText = 'DEFEAT';
    }

    document.getElementById('result').style.animation = 'animateVisibility 1s';
    setTimeout(() => {
      document.getElementById('result').style.opacity = '1';
      document.getElementById('result').style.animation = '';
    }, 900);
  }

  componentDidMount = () => {
    proceed = true;
    turn = Math.floor(Math.random() * 2);
    if(turn === 0) this.computerMove();
  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <Navbar className="fixed-top bg-dark">
            <button id="reload" className="btn" onClick={this.handleRestart}><h1 className="reload-font">⟳</h1></button>
          </Navbar>
          <Navbar className="fixed-bottom bg-dark justify-content-center">
            <h1 className="align-self-center"><Badge id="result" style={{display: 'block', opacity: 0}}></Badge></h1>
          </Navbar>
          <Container className="container" style={{display: 'block'}}>
            <Row className="justify-content-center" style={{marginBottom: 0}}>
              <Col className="col-auto" style={{paddingRight: 4, paddingLeft: 0}}>
                <Button id="b-1" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-1" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-1" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingRight: 2, paddingLeft: 2, paddingBottom: 5}}>
                <Button id="b-2" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-2" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-2" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingLeft: 4, paddingRight: 0}}>
                <Button id="b-3" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-3" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-3" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-center" style={{marginBottom: 0}}>
              <Col className="col-auto" style={{paddingRight: 4, paddingLeft: 0}}>
                <Button id="b-4" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-4" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-4" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingRight: 2, paddingLeft: 2, paddingBottom: 5}}>
                <Button id="b-5" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-5" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-5" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingLeft: 4, paddingRight: 0}}>
                <Button id="b-6" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-6" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-6" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-auto" style={{paddingRight: 4, paddingLeft: 0}}>
                <Button id="b-7" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-7" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-7" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingRight: 2, paddingLeft: 2}}>
                <Button id="b-8" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-8" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-8" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
              <Col className="col-auto" style={{paddingLeft: 4, paddingRight: 0}}>
                <Button id="b-9" onClick={(e) => this.handleClick(e)} variant="dark" className="bt">
                  <img id="o-9" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={circle}/>
                  <img id="x-9" style={{display: 'none', opacity: 0}} className="img" alt="rrr" src={xmark}/>
                </Button>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
     );
  }

  computerMove = () => {
    let move = null;
    if(turn === 1){
      takenFields[5] === 1 ? move = 9 : move = 5;
      takenFields[move] = 2;
    }
    if(move === null) move = this.handlelLogic(2);
    if(move === null) move = this.handlelLogic(1);

    if(turn === 0){
      move = 5;
      takenFields[5] = 2;
    }
    if(turn === 2 && move === null){
      if(takenFields[2] === 1 || takenFields[4] === 1 || takenFields[6] === 1 || takenFields[8] === 1){
        move = 1;
        takenFields[1] = 2;
      }
    }
    if(turn === 2 && move === null){
      if(takenFields[1] === 1){
        move = 9;
        takenFields[9] = 2;
      }
      if(takenFields[3] === 1){
        move = 7;
        takenFields[7] = 2;
      }
      if(takenFields[7] === 1){
        move = 3;
        takenFields[3] = 2;
      }
      if(takenFields[9] === 1){
        move = 1;
        takenFields[1] = 2;
      }
    }
    if(turn === 4 && move === null){
      if(takenFields[2] === 1){
        if(takenFields[7] !== 1){
          move = 7;
          takenFields[7] = 2;
        }
      }
      if(takenFields[4] === 1){
        if(takenFields[3] !== 1){
          move = 3;
          takenFields[3] = 2;
        }
      }
    }
    if(move === null){
      if(takenFields[1] === 0 && move === null){
        move = 1; 
        takenFields[1] = 2;
      }
      if(takenFields[3] === 0 && move === null){
        move = 3; 
        takenFields[3] = 2;
      }
      if(takenFields[7] === 0 && move === null){ 
        move = 7; 
        takenFields[7] = 2;
      }
      if(takenFields[9] === 0 && move === null){
        move = 8; 
        takenFields[9] = 2;
      }
      if(takenFields[2] === 0 && move === null){
        move = 2; 
        takenFields[2] = 2;
      }
      if(takenFields[4] === 0 && move === null){ 
        move = 4; 
        takenFields[4] = 2;
      }
      if(takenFields[6] === 0 && move === null){ 
        move = 6; 
        takenFields[6] = 2;
      }
      if(takenFields[8] === 0 && move === null){ 
        move = 8; 
        takenFields[8] = 2;
      }
    }
    document.getElementById('o-' + move).style.display = 'inline';
    document.getElementById('o-' + move).style.animation = 'animateVisibility 1s';
    setTimeout(() => {
      document.getElementById('o-' + move).style.animation = '';
      document.getElementById('o-' + move).style.opacity = '1';
    }, 900);
    turn += 2;
    takenFields[move] = 2;
    this.checkResult('move');
  }

  handlelLogic = (n1) => {
    let move = null;
    let n2;
    n1 === 1 ? n2 = 2 : n2 = 1;

    if(takenFields[1] === n1 && takenFields[2] === n1 && takenFields[3] !== n2) move = 3;
    if(takenFields[1] === n1 && takenFields[3] === n1 && takenFields[2] !== n2) move = 2;
    if(takenFields[2] === n1 && takenFields[3] === n1 && takenFields[1] !== n2) move = 1;

    if(takenFields[4] === n1 && takenFields[5] === n1 && takenFields[6] !== n2) move = 6;
    if(takenFields[4] === n1 && takenFields[6] === n1 && takenFields[5] !== n2) move = 5;
    if(takenFields[5] === n1 && takenFields[6] === n1 && takenFields[4] !== n2) move = 4;

    if(takenFields[7] === n1 && takenFields[8] === n1 && takenFields[9] !== n2) move = 9;
    if(takenFields[7] === n1 && takenFields[9] === n1 && takenFields[8] !== n2) move = 8;
    if(takenFields[8] === n1 && takenFields[9] === n1 && takenFields[7] !== n2) move = 7;

    if(takenFields[1] === n1 && takenFields[4] === n1 && takenFields[7] !== n2) move = 7;
    if(takenFields[1] === n1 && takenFields[7] === n1 && takenFields[4] !== n2) move = 4;
    if(takenFields[4] === n1 && takenFields[7] === n1 && takenFields[1] !== n2) move = 1;

    if(takenFields[2] === n1 && takenFields[5] === n1 && takenFields[8] !== n2) move = 8;
    if(takenFields[2] === n1 && takenFields[8] === n1 && takenFields[5] !== n2) move = 5;
    if(takenFields[5] === n1 && takenFields[8] === n1 && takenFields[2] !== n2) move = 2;

    if(takenFields[3] === n1 && takenFields[6] === n1 && takenFields[9] !== n2) move = 9;
    if(takenFields[3] === n1 && takenFields[9] === n1 && takenFields[6] !== n2) move = 6;
    if(takenFields[6] === n1 && takenFields[9] === n1 && takenFields[3] !== n2) move = 3;

    if(takenFields[1] === n1 && takenFields[5] === n1 && takenFields[9] !== n2) move = 9;
    if(takenFields[1] === n1 && takenFields[9] === n1 && takenFields[5] !== n2) move = 5;
    if(takenFields[5] === n1 && takenFields[9] === n1 && takenFields[1] !== n2) move = 1;

    if(takenFields[3] === n1 && takenFields[5] === n1 && takenFields[7] !== n2) move = 7;
    if(takenFields[3] === n1 && takenFields[7] === n1 && takenFields[5] !== n2) move = 5;
    if(takenFields[5] === n1 && takenFields[7] === n1 && takenFields[3] !== n2) move = 3;

    return move;
  }

  checkResult = (e) => {
    let winner = null;
    for(let i = 1; i < 3; i ++){
      if(takenFields[1] === i && takenFields[2] === i && takenFields[3] === i) winner = i;
      if(takenFields[4] === i && takenFields[5] === i && takenFields[6] === i) winner = i;
      if(takenFields[7] === i && takenFields[8] === i && takenFields[9] === i) winner = i;
      if(takenFields[1] === i && takenFields[4] === i && takenFields[7] === i) winner = i;
      if(takenFields[2] === i && takenFields[5] === i && takenFields[8] === i) winner = i;
      if(takenFields[3] === i && takenFields[6] === i && takenFields[9] === i) winner = i;
      if(takenFields[1] === i && takenFields[5] === i && takenFields[9] === i) winner = i;
      if(takenFields[3] === i && takenFields[5] === i && takenFields[7] === i) winner = i;
    }

    if(winner === 1) this.announceResult(1);
    else if(winner === 2) this.announceResult(2);
    else if(winner === null && turn > 8) this.announceResult(0);
    else if(e === 'move') proceed = true;
  }
}

export default App;
