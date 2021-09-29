import './SpellList.css'
import Spell from './Spell'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'

const SpellList = () => {
    const [spells, setSpells] = useState([])
    const [ordering, setOrdering] = useState('name')
    const [url, setUrl] = useState(`https://api.open5e.com/spells/?ordering=${ordering}&limit=20`)
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')
    const [btnNextDisabled, setBtnNextDisabled] = useState(false)
    const [btnPreviousDisabled, setBtnPreviousDisabled] = useState(false)

    useEffect(() => {
        if(url == null)
            return

        axios.get(url).then(resp => {
            setSpells(resp.data.results)
            setNextUrl(resp.data.next)
            setPreviousUrl(resp.data.previous)
        }).catch(err => console.log(err))
    }, [url])

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

    const handleNext = () => {
        setUrl(nextUrl)

        setBtnNextDisabled(nextUrl == null)
    }

    const handlePrevious = () => {
        setUrl(previousUrl)

        setBtnPreviousDisabled(previousUrl == null)
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
            <Pagination next={handleNext} previous={handlePrevious} nextDisabled={btnNextDisabled} previousDisable={btnPreviousDisabled}/>
        </div>
    )
}

export default SpellList