import './Content.css'
import Search from './Search'
import SpellList from './SpellList'


const Content = () => {
    return(
        <div className='content'>
            <Search />
            <SpellList />
        </div>
    )
}

export default Content