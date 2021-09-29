import "./Pagination.css"

const Pagination = props => {
    return (
        <div className='pagination'>
            <div className='btn-group'>
                {props.previousDisabled ? <button disabled>{'<<'}</button> : <button onClick={props.previous}>{'<<'}</button>}
                {props.nextDisabled ? <button disabled>{'>>'}</button> : <button onClick={props.next}>{'>>'}</button>}
            </div>
        </div>
    )
}

export default Pagination
