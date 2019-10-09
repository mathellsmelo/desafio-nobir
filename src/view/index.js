class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: ''
        }
        this.collectCoin = this.collectCoin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    collectCoin = async (str) => {
        console.log(str)
        const nickname = 'Teste Via React';
        const value = 1;
        await axios.post('/coins', {
            nickname,
            value
        }).then(res => {
            console.log(res);
        }).catch(error => {alert(error)});
    }

    getUser = async () => {
        console.log(str)
        const nickname = 'Teste Via React';
        const value = 1;
        await axios.post('/coins', {
            nickname,
            value
        }).then(res => {
            console.log(res);
        }).catch(error => {alert(error)});
    }

    handleChange(event) {
        this.setState({nickname: event.target.value});
    }

    async handleSearch(event) {
        event.preventDefault();
        await axios.get(`/users?nickname=${this.state.nickname}`).then(res => {
            console.log(res.data.nickname);
        }).catch(error => {
            alert(error.errmsg);
        });
    }

    async handleRegister(event) {
        event.preventDefault();
        const nickname = this.state.nickname;
        await axios.post('/users', {
            nickname
        }).then(res => {
            alert(res.data);
        }).catch(error => {
            alert(error.errmsg);
        });
    }

    render() {
        return(
            <div> 
                <form onSubmit={this.handleSearch}>
                    <label>
                        Digite o nome do jogador:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Buscar" />
                </form>
                <form onSubmit={this.handleRegister}>
                    <label>
                        Cadastre um novo jogador:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Cadastrar" />
                </form>
                <h1>Teste</h1>
                <button onClick={() => this.collectCoin('pipipopop')}> COLETAR MOEDA </button>
                <h1>Teste</h1>
                <button onClick={() => this.collectCoin('pipipopop')}> COLETAR MOEDA </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);