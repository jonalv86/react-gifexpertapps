// export const GifGridItem = (props) => {
    // Abajo es lo mismo
export const GifGridItem = ({title, url}) => {


    // console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
