import React from 'react';
import './App.css';

import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isUserLogged: false,
      userId: 0,
      userNickname: '',
      monsters: [],
      userTrophies: [
        {number_of_trophies: 0, description: ''}
      ],
      collected_coin: 0,
      death_number: 0,
      killed_monster: {
        id: 0, name: ''
      },
      monster_number: 0,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCoin = this.handleCoin.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
    this.handleMonster = this.handleMonster.bind(this);
    this.updateNickname = this.updateNickname.bind(this);
    this.updateCoin = this.updateCoin.bind(this);
    this.updateDeath = this.updateDeath.bind(this);
    this.updateMonster = this.updateMonster.bind(this);
    this.updateMonsterNum = this.updateMonsterNum.bind(this);
  }

  componentDidMount() {
    this.getMonsters();
  }

  getMonsters = async() => {
    await axios.get(`http://localhost:3000/monsters`).then(res => {
      this.setState({
        monsters: res.data
      })
      console.log(this.state.monsters)
    }).catch(err => {
      console.log(err);
    });
  }

  handleLogin = async() => {
    await axios.get(`http://localhost:3000/users/${this.state.userNickname}`).then(res => {
      this.setState({
        isUserLogged: true,
        userId: res.data[0].id,
        userNickname: res.data[0].nickname
      });
      this.getUserTrophies();
    }).catch(err => {
      console.log(err);
    })
    
  }

  handleDeath = async() => {
    await axios.post(`http://localhost:3000/users/${this.state.userId}/deaths/${this.state.death_number}`).then(res => {
      alert('Sucesso!');
      this.getUserTrophies();
    }).catch(err => {
      console.log(err);
    })
    
  }

  handleCoin = async() => {
    await axios.post(`http://localhost:3000/users/${this.state.userId}/collected-coins/${this.state.collected_coin}`).then(res => {
      alert('Sucesso!');
      this.getUserTrophies();
    }).catch(err => {
      console.log(err);
    })
    
  }

  handleMonster = async() => {
    await axios.post(`http://localhost:3000/users/${this.state.userId}/monster/${this.state.killed_monster.id}/killed-monsters/${this.state.monster_number}`).then(res => {
      alert('Sucesso!');
      this.getUserTrophies();
    }).catch(err => {
      console.log(err);
    })
  }

  getUserTrophies = async() => {
    await axios.get(`http://localhost:3000/users/${this.state.userId}/trophies`).then(res =>{
      this.setState({ 
        userTrophies: res.data
      });
      console.log(this.state.userTrophies);
    }).catch(err => {
      console.log(err);
    });
  }

  updateNickname = async (e) => {
    await this.setState({
      userNickname: e.target.value
    })
  }
  updateCoin = async (e) => {
    await this.setState({
      collected_coin: e.target.value
    })
  }
  updateDeath = async (e) => {
    await this.setState({
      death_number: e.target.value
    })
  }
  updateMonster = async (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const id = e.target.options[selectedIndex].getAttribute('data-key');
    let killed_monster = Object.assign({id , name: e.target.value})
    await this.setState({
      killed_monster
    })
  }
  updateMonsterNum = async (e) => {
    await this.setState({
      monster_number: e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Desafio RIBON :-)</h1>
          {this.state.isUserLogged === false 
          ?
            <div className="fade-in">
              <div className="group">
                <input type="text" id="name" onChange={this.updateNickname} required="required"/>
                <label htmlFor="name">Entre com o nickname do Jogador</label>
                <div className="bar"></div>
              </div>
              <div>
                <button className="button1" onClick={() => this.handleLogin()}>ENTRAR</button>
              </div>
            </div>
          :
            <div className="fade-in">
              <h3>Usuário: {this.state.userNickname}</h3>
              {this.state.userTrophies.map(trophy => 
                <p key={trophy.description}>
                  {trophy.description} Trophies : {trophy.number_of_trophies}
                </p>)}
              <div className="forms">
                <div className="group">
                  <input type="number" id="collect-coin" onChange={this.updateCoin} required="required"/>
                  <label className="littleLabel" htmlFor="collect-coin">Número de Moedas</label>
                  <div className="bar"></div>
                </div>
                <button className="button1" onClick={() => this.handleCoin()}>COLLECT!</button>
                <div className="group">
                  <input type="number" id="kill-monsters" onChange={this.updateMonsterNum} required="required"/>
                  <label className="littleLabel" htmlFor="kill-monsters">Número de Monstros</label>
                  <div className="bar"></div>
                </div>
                <div className="select-mode">
                  <select onChange={this.updateMonster}>
                    {this.state.monsters.map((monster, key) => 
                      <option key={key} data-key={monster.id} value={monster.name}>
                        {monster.name}
                      </option>
                    )}
                  </select>
                </div>
                <button className="button1" onClick={() => this.handleMonster()}>KILL!</button>
                <div className="group">
                  <input type="number" id="death" onChange={this.updateDeath} required="required"/>
                  <label className="littleLabel" htmlFor="death">Número de Mortes</label>
                  <div className="bar"></div>
                </div>
                <button className="button1" onClick={() => this.handleDeath()}>NO!</button>
              </div>
            </div>
          }        
      </div>
    );
  }
}

export default App;
