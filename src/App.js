
import './App.scss';

import { Card } from './components/Card';
import { Drawyer } from './components/Drawyer';
import { Header } from './components/Header';
function App() {
  const list = [
    { title: 'Nike', price: 1000, image: './img/item1.png' },
    { title: 'Puma', price: 2000, image: './img/item1.png' },
    { title: 'Adidas', price: 3000, image: './img/item1.png' },
    { title: 'Polo', price: 4000, image: './img/item1.png' },

  ]
  const handleClick = (item) => {
    alert(item)
  }
  
  return (
    <div className="main">
      {/* <Drawyer /> */}
      <div className="wrapper">
        <Header />
        <div className='content'>
          <div className='title_wrapper d-flex align-items-center justify-content-between'>
            <div className="title_block ">
              <h2>Все кроссовки</h2>
            </div>
            <div className="search">
              <input className='form-control w-100' type="search" placeholder='Поиск...' />
            </div>
          </div>

          <div className="items_wrapper">
            <div className="row mt-4 align-items-stretch h-100 gx-5">

              {list.map(item => <Card item={item} onclick={() => handleClick(item.title)} />)}

            </div>
          </div>



        </div>
      </div>

    </div>
  );
}

export default App;
