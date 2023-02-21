import { Container ,StyledLink} from "./styles";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext,FormEvent} from "react";
// import { AuthContext } from "../../contexts/AuthContext";
//import { api } from "../../services/api";
//import cookie from 'react-cookies';

export function NavBar(){

    //const {token,setToken} = useContext(AuthContext);
    //const navigate = useNavigate();
    // async function logOff(event:FormEvent){
    //     event.preventDefault();
    //     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //          api.post('auth/logout').then(()=>{
    //         cookie.remove('hardtoken',{path:'/'});
    //         setToken(null);
    //         navigate('/');
    //     })
    // }
    return(
        <>
        <Container>
            <div className="left">
                <h1>
                    Gestão médica
                </h1>
            </div>
            <div className="right">
            </div>
        </Container>
        <Outlet/>
        </>
    );
}