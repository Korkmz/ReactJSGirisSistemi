import React,{Component} from 'react';
import './App.css';
import TodoStwitch from "./components/TodoStwitch";
import TodoLogin from "./components/TodoLogin";
import TodoRegister from "./components/TodoRegister";

class App extends Component{
    state ={
        kisiler:[],
        secimNo:false,
        kisiEmail:'',
        kisiSifre:'',
        hataMesaji:false,
        hataMesaji2:false,
    };
    onRegister=(e)=>{
        e.preventDefault();
        let email1=document.getElementById("emailReg").value;
        let sifre=document.getElementById("sifreReg").value;
        let tekrarSifre=document.getElementById("sifreTekrarReg").value;
        console.log(sifre+" "+tekrarSifre);

        if (email1 != '' || email1 != null){
            if (sifre === tekrarSifre){
                const newKisi={
                    kisiEmail:email1,
                    kisiSifre:sifre,
                };

                const updateItem=[...this.state.kisiler,newKisi];
                this.setState({
                    kisiler:updateItem,
                    secimNo:true,
                    kisiEmail:'',
                    kisiSifre:'',
                    hataMesaji:false,
                    hataMesaji2:false,});
            }else{
                this.setState({
                    hataMesaji:true
                })
            }
        } else{

        }

    };
    onLogin =(e)=>{
        e.preventDefault();
        let email=document.getElementById("emailLogin").value;
        let sifre=document.getElementById("sifreLogin").value;

        const filterId=this.state.kisiler.find(kisiler=> kisiler.kisiEmail ===email);
        if (filterId ===undefined){
            console.log("böle bir kiş yok");
            this.setState({
                hataMesaji2:true,
            });

        } else{
            if (email ===filterId.kisiEmail && sifre ===filterId.kisiSifre) {
                this.setState({
                    hataMesaji2:false,
                });
            }else{
                this.setState({
                    hataMesaji2:true,
                });
            }
        }
    };
    secim =(id)=>{
        console.log(id)
        if (id === 1){
            this.setState({secimNo:true});
        } else {
            this.setState({secimNo:false});

        }
    };
    render() {

        return(

            <div className={"container"}>
                <TodoStwitch secim={this.secim} secimNo={this.state.secimNo}/>
                {this.state.secimNo ?
                    <TodoLogin
                        onLogin={this.onLogin}
                        hataMesaji={this.state.hataMesaji2}/>
                    :
                    <TodoRegister
                        onRegister={this.onRegister}
                        hataMesaji={this.state.hataMesaji}/> }
            </div>
        );
    }
}

export default App;
