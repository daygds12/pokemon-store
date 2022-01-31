import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import * as S from "./Login.styles"
import Background from '../../img/background.jpg'
import { logDOM } from "@testing-library/react";
import Logo from '../../img/logo.jpg'



export default function Login() {

    const navigate = useNavigate();

    return (
        
        <div>
          <S.Navbar>Pokemon
              
           
          </S.Navbar>
          <S.Login>Acessar Pagina
              <div>
          <label for="Login">E-mail</label>
            <input type="text" placeholder="Digite um email"/>
           
            <label for="Password">Senha</label>
            <input type="text" placeholder="Digite um email"/>
            <div>
                <S.Button>Clique</S.Button>
            </div>
            </div>
          </S.Login>

            <div>
                <S.Imagem>
            <img src={Background}/>
            </S.Imagem>
            </div>
           <div>
           <S.Footer>@by Pokemon</S.Footer>
           </div>
        </div>
    );
    }