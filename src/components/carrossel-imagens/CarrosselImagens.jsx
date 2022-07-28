import './carrosselimagens.css'

function CarrosselImagens(props) {
    return (
        <div className="carrossel" >
            {props.images.map(
                ({ src, alt,}) => <div> <img src={src} alt={alt} /></div>
            )}
        </div>
    )
}


export default CarrosselImagens
