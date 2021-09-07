import React, { useState } from 'react';
import {rutaAPI} from '../../config/Config'
import $ from "jquery";
export default function Login(){

    //hook para iniciar sesion 

    const [administradores, iniciarSesion] = useState({
        usuario:  "",
        password: ""
    });

    //captura de cambios en el formulario para ejecutar la funcion del hook

    const cambiaForm = (e)=>{
        iniciarSesion({
            ...administradores,
            [e.target.name]: e.target.value
            
        })

       
    }

    //se ejecuta en boton submit 

    const login = async(e)=>{

        $(".alert").remove();
        e.preventDefault();

       const result = await loginAPI(administradores);

       
       console.log("result",result)

       if(result.status !== 200){
        $("button[type='submit']").before(`<div class="alert alert-danger">${result.mensaje}</div>`)
       }else{
        // $("button[type='submit']").before(`<div class="alert alert-success">${result.token}</div>`)
        localStorage.setItem("ACCESS_TOKEN",result.token);
        
        localStorage.setItem("ID",result.data._id);
        localStorage.setItem("USUARIO",result.data.usuario);

        window.location.href = "/";
       }
    }


    
    //retornar la vista


    return(

        <div className="login-page" style={{ minHeight: "512.391px" }}>

			<div className="login-box">

				<div className="login-logo">

					<b>iMetrix</b>

				</div>			

				<div className="card">

					<div className="card-body login-card-body">

						<p className="login-box-msg">

							Llena los campos para iniciar sesión

						</p>

						<form onChange={cambiaForm} onSubmit={login} >

							<div className="input-group mb-3">

								<input
									type="text"
									className="form-control"
									placeholder="Usuario"
									name="usuario"
					
								/>

								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-user"></span>
									</div>
								</div>

							</div>

							<div className="input-group mb-3">

								<input
									type="password"
									className="form-control"
									placeholder="Password"
									name="password"
								
								/>

								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
					
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-block"
							>
								Ingresar
							</button>

						</form>

					</div>

				</div>

			</div>

		</div>
    )
}

//peticion post para login

const loginAPI = data => {
    const url = `${rutaAPI}/login`;

    const params  = {
        method : 'POST',
        body:  JSON.stringify(data),
        headers : {"Content-Type":"application/json"}
    }
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

