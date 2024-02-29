import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext)
    console.log( user)
    return (
        <>
            <h1>Login User : </h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
                className="btn btn-primary" 
                onClick={() => setUser({ id: 123, name: 'Rodrigo Mauricio', email: 'rodrigo@gmail.com' })} >
                Establecer usuario
            </button>
        </>

    )
}