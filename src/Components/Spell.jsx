import './Spell.css'
import {Fragment} from 'react'

const Spell = props => {
    return(
        <tr className={props.index % 2 == 0 ? 'even' : 'uneven'}>
            <td>{props.name}</td>
            <td className='centered'>{props.level}</td>
            <td>{props.dnd_class}</td>
            <td>{props.components}</td>
            <td>{props.school}</td>
            <td className='no-border'><button>+</button></td>
        </tr>
    )
}

export default Spell