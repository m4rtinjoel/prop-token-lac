import React from "react";

const Login = (props) => {

    return (
    <div>
            <p>Cuenta: <strong>{ props.cuenta}</strong></p>
        <p>Saldo: <strong>{ props.saldo}</strong></p>
    </div>
    )
}

export default Login;