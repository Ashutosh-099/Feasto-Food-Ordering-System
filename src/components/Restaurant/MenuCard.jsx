import { useState } from 'react';
import ItemCard from './ItemCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MenuCard = (props) => {
    const { title, items } = props;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='w-full bg-white my-4 p-3 rounded-xl cursor-pointer' onClick={() => { setShowMenu(!showMenu) }}>
            <div className='flex justify-between align-middle'>
                <p className='font-bold text-lg'>{title} (4) </p>
                {showMenu ? <KeyboardArrowUpIcon onClick={() => { setShowMenu(!showMenu) }} /> : <KeyboardArrowDownIcon onClick={() => { setShowMenu(!showMenu) }} />}
            </div>
            {showMenu && <>{
                items.map(item => (
                    <ItemCard key={item.card.info.id} name={item.card.info.name} description={item.card.info.description} price={item.card.info.price} imageURL={item.card.info.imageId} />
                ))
            }</>}

        </div>
    );
}

export default MenuCard;