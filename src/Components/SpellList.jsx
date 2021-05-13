import './SpellList.css'
import Spell from './Spell'
import axios from 'axios'
import {useState, useEffect} from 'react'

const SpellList = () => {
    let [spells, setSpells] = useState([])
    let [ordering, setOrdering] = useState('name')

    let url = `https://api.open5e.com/spells/?ordering=${ordering}&limit=20`

    useEffect(() => {
        axios.get(url).then(resp => setSpells(resp.data.results)).catch(err => console.log(err))
    }, [ordering])

    const orderByName = e => {
        e.preventDefault()
        setOrdering('name')
    }

    const orderByLevel = e => {
        e.preventDefault()
        setOrdering('level_int')
    }

    const orderByClass = e => {
        e.preventDefault()
        setOrdering('dnd_class')
    }

    const orderByComponents = e => {
        e.preventDefault()
        setOrdering('components')
    }

    const orderBySchool = e => {
        e.preventDefault()
        setOrdering('school')
    }


    return(
        <div className="spellList">
            <table>
                <thead>
                    <tr>
                        <th><a href="#" onClick={orderByName}>Name</a></th>
                        <th><a href="#" onClick={orderByLevel}>Level</a></th>
                        <th><a href="#" onClick={orderByClass}>Class</a></th>
                        <th><a href="#" onClick={orderByComponents}>Components</a></th>
                        <th><a href="#" onClick={orderBySchool}>School</a></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {spells.map((spell, i) => <Spell key={i} index={i} name={spell.name} level={spell.level_int} dnd_class={spell.dnd_class} components={spell.components} school={spell.school}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default SpellList