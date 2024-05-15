const InfoBox = () => {
    return (
        <div className="infoContainer">
            <div className="boxInfo">
                <h1 className="subtitleHome1">Orario di apertura</h1>
                <ol className="boxList">
                    <li>Lunedì - Sabato 08.00 - 19.00 </li>
                    <li>Domenica - chiuso </li>
                </ol>
            </div>
            <div className="boxInfo2">
                <h1 className="subtitleHome1">Nome officina</h1>
                <h1 className="subtitleHome1">partita iva</h1>
            </div>
            <div className="boxInfo">
                <h1 className="subtitleHome1">Contatti</h1>
                <ol className="boxList">
                    <li>Città - </li>
                    <li>Via - </li>
                    <li>Numero - </li>
                    <li>Email - </li>
                </ol>
            </div>
        </div>
    )
}
export default InfoBox