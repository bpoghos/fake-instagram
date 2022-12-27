import './styles.css'


export const Card = () => {
    return(
        <div className="card">
            <div className='deleteDiv'>
            <p className="deletePara">X</p>
            </div>
            <div className="imgDiv">
                <img className="img" alt="" src="" />
            </div>
            <div className="descriptionDiv">
                <p className="description"></p>
            </div>
            <div className="commentDiv">
                <input className="commentInput" type='text' />
            </div>

        </div>
    )
}