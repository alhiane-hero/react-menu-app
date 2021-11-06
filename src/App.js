import {useState} from 'react';
import Items from './components/Data';
import Menu from './components/Menu';
import Categories from './components/Categories';
import './sass/all.scss';
const allCategories = ['all', ...new Set(Items.map(item => item.category))];

function App() {
  
  const [menuItems, setMenuItems] = useState(Items);
  const [categories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='Title'>
          <h2>Our Menu</h2>
          <div className='UnderLine'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </div>
    </div>
  );
}

export default App;
