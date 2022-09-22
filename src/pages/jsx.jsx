const Jsx = () => {
    const titulo = <h1>JSX é um conceito central</h1>

    const subtitulo = () => {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}
        </div>
    )
}

export default Jsx