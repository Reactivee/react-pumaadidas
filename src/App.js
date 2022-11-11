
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Drawyer } from './components/Drawyer';
import { Header } from './components/Header';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Orders } from "./pages/Orders";

export const iContext = React.createContext({})


function App() {

  const [cartOpened, setOpenCart] = useState(false)
  const [basket, setBasket] = useState([])
  const [search, setSearchInput] = useState('')
  const [items, setItems] = useState([])
  const [favorite, setFavorite] = useState([])

  const addToBasket = async (item) => {

    try {
      if (basket.find(element => element.title == item.title)) {
        deleteBasket(item)
      }
      else {
        const res = await axios.post('https://6332e4f6a54a0e83d25b2521.mockapi.io/card', item);
        setBasket([...basket, item])
      }

    } catch (error) {
      alert(error)
    }

  }

  const deleteBasket = (id) => {
    axios.delete(`https://6332e4f6a54a0e83d25b2521.mockapi.io/card/${id}`);
    const filtered = basket.filter(item => item.id != id)
    setBasket((filtered))

  }

  const searchInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const addedItemBasket = (cardObj) => {
    console.log(cardObj)
    return basket.some(el => el.id == cardObj.parent_id)
  }

  const addFavorite = async (items) => {
    try {
      const findItem = favorite.find(item => item.id == items.id)
      if (findItem) {
        axios.delete(`https://6332e4f6a54a0e83d25b2521.mockapi.io/favorite/${items.id}`);
        const filtered = favorite.filter(item => item.id != items.id)
        setFavorite((filtered))

      } else {
        const res = await axios.post('https://6332e4f6a54a0e83d25b2521.mockapi.io/favorite', items);
        setFavorite([...favorite, items])
      }
    } catch (error) {
      alert(error)
    }

  }


  useEffect(() => {

    async function fetchData() {

      const [getItems, getBasket, getFavorite] = await Promise.all([
        axios.get('https://6332e4f6a54a0e83d25b2521.mockapi.io/sneaker'),
        axios.get('https://6332e4f6a54a0e83d25b2521.mockapi.io/card'),
        axios.get('https://6332e4f6a54a0e83d25b2521.mockapi.io/favorite')
      ])
      // const getItems = await 

      // const getBasket = await 

      // const getFavorite = await axios.

      setItems(getItems.data)
      setFavorite(getFavorite.data)
      setBasket(getBasket.data)
    }

    fetchData()
  }, [])

  return (
    <iContext.Provider value={{ favorite, items, basket, addedItemBasket }}>
      <div className="main">
        {cartOpened && <Drawyer onClose={() => setOpenCart(false)} onDelete={deleteBasket} />}

        <div className="wrapper">

          <BrowserRouter>
            <Header onclickCard={() => setOpenCart(!cartOpened)} />
            <Routes>
              <Route path="/" element={<Home searchInputChange={searchInputChange} search={search} items={items} addFavorite={addFavorite} addToBasket={addToBasket} />} />
              <Route path="/favorite" element={<Favorites addFavorite={addFavorite} addToBasket={addToBasket} />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </BrowserRouter>,

        </div>
      </div>
    </iContext.Provider>
  );
}

export default App;
