
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ErrorPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }, [navigate])

  return (
    <div>
      <h1>ERROR - PÁGINA NO ENCONTRADA</h1>
      <h3>Serás redireccionado a la página principal de Racoon Store en un momento.</h3>
    </div>
  )
}

export default ErrorPage