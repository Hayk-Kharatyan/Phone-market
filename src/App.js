import { useReducer, useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  let arr = [
    {
      brand: "Samsung",
      model: "S23",
      ozu: "8gb",
      storage: "256gb",
      color: "Purple",
      price: 1080,
      img: "./images/samsung2.png",
      counter: 1,
      id: 0
    },

    {
      brand: "Iphone",
      model: "13 Mini",
      ozu: "4gb",
      storage: "256gb",
      color: "Yellow",
      price: 1280,
      img: "./images/iphone1.png",
      counter: 1,
      id: 1
    },

    {
      brand: "Iphone",
      model: "13 Mini",
      ozu: "4gb",
      storage: "256gb",
      color: "Blue",
      img: "./images/iphone2.png",
      counter: 1,
      id: 2,
      price: 1240,
    },


    {
      brand: "Iphone",
      model: "14 pro",
      ozu: "6gb",
      storage: "512gb",
      color: "Purple",
      img: "./images/iphone3.png",
      counter: 1,
      id: 3,
      price: 1360,
    },


    {
      brand: "Xiaomi",
      model: "Redmi Note 12",
      ozu: "4gb",
      storage: "128gb",
      color: "Gray",
      img: "./images/xiaomi3.png",
      counter: 1,
      id: 4,
      price: 230,
    },
    {
      brand: "Samsung",
      model: "s23",
      ozu: "16gb",
      storage: "512gb",
      color: "Black",
      img: "./images/samsungzet.png",
      counter: 1,
      id: 5,
      price: 599,
    },
    {
      brand: "Iphone 14 Pro",
      img: "./images/iphone14pro.jpg",
      ozu: "6gb",
      storage: "512gb",
      color: "Purple",
      price: 1500,
      counter: 1,
      id: 6,

    },
    {
      brand: "Samsung",
      model: "A24",
      img: "./images/samsungA24.png",
      ozu: "4gb",
      storage: "128gb",
      color: "Black",
      price: 320,
      counter: 1,
      id: 7,
    },
    {
      brand: "Samsung",
      model: "A54",
      img: "./images/samsungA54.png",
      ozu: "8gb",
      storage: "256gb",
      color: "Violet",
      price: 400,
      counter: 1,
      id: 8,
    },
    {
      brand: "Samsung",
      model: "M14",
      img: "./images/samsungM14.png",
      ozu: "4gb",
      storage: "64gb",
      color: "Dark Blue",
      price: 220,
      counter: 1,
      id: 9,
    },
    {
      brand: "Samsung",
      model: "S23 FE",
      img: "./images/samsungs23fe.png",
      ozu: "8gb",
      storage: "256gb",
      color: "White",
      price: 920,
      counter: 1,
      id: 10,
    },
    {
      brand: "Samsung",
      model: "Z Fold 5",
      img: "./images/samsungz5.png",
      ozu: "12gb",
      storage: "256gb",
      color: "Blue",
      price: 1900,
      counter: 1,
      id: 11,
    },
    {
      brand: "Xiaomi",
      model: "Redmi Note 12",
      img: "./images/xiaomi12pro.png",
      ozu: "8gb",
      storage: "256gb",
      color: "Glaicer Blue",
      price: 450,
      counter: 1,
      id: 12,
    },
    {
      brand: "Xiaomi",
      model: "Redmi Note 12",
      img: "./images/xiaomi12.png",
      ozu: "8gb",
      storage: "256gb",
      color: "Black",
      price: 410,
      counter: 1,
      id: 13,
    },
    {
      brand: "Xiaomi",
      model: "13T Pro",
      img: "./images/xiaomi13.png",
      ozu: "12gb",
      storage: "512gb",
      color: "Black",
      price: 500,
      counter: 1,
      id: 14,
    },
    {
      brand: "Xiaomi",
      model: "Redmi 12",
      img: "./images/xiaomiredmi12.png",
      ozu: "8gb",
      storage: "256gb",
      color: "Sky Blue",
      price: 400,
      counter: 1,
      id: 15,
    },
    {
      brand: "Xiaomi",
      model: "A2+",
      img: "./images/XiaomiA2.png",
      ozu: "3gb",
      storage: "64gb",
      color: "Light Green",
      price: 180,
      counter: 1,
      id: 16,
    },
    {
      brand: "Xiaomi",
      model: "13 Lite",
      img: "./images/xiaomi13L.png",
      ozu: "8gb",
      storage: "256gb",
      color: "Black",
      price: 460,
      counter: 1,
      id: 17,
    },
  ]




  let [Total, SetTotal] = useState(0)

  let [OpenCart, SetOpneCart] = useState(false)

  let [Counter, Setcounter] = useState(0)

  let [Item, SetItem] = useState(0)

  let [FilPhone, setFilPhone] = useState(false)

  const [filteredProducts, setFilteredProducts] = useState(arr);

  const [state, dispatch] = useReducer(reducer, [])

  function reducer(state, action) {
    if (action.type === "add") {
      let statment = state.filter((item) => item.id === action.payload.id)
      SetItem(Item += 1)
      Setcounter(Counter + 1)
      SetTotal(Total += action.payload.price * action.payload.counter)
      if (statment.length > 0) {
        let newState = state.map((st) => {
          if (st.id === action.payload.id) {
            st.counter = st.counter + 1
          }
          return st
        })

        return newState
      }
      else {
        return [
          ...state,
          {
            brand: action.payload.brand,
            model: action.payload.model,
            ozu: action.payload.ozu,
            storage: action.payload.storage,
            color: action.payload.color,
            img: action.payload.img,
            id: action.payload.id,
            price: action.payload.price,
            counter: action.payload.counter
          }
        ]
      }

    }

    else if (action.type === "delete") {
      SetTotal(Total -= action.payload.price * action.payload.counter)
      Setcounter(Counter -= action.payload.counter)
      SetItem(Item -= action.payload.counter)
      return state.filter((sta) => sta.id !== action.payload.id)
    }

  }

  return (
    <div className="App">
      <div className='nav'>
        <div className='left'>
          <a href='#'>
            <img alt='mobile' src='./images/litecenter.png'></img>
          </a>
        </div>
        <div className='right'>
          <button className='openclick' onClick={() => {
            SetOpneCart(!OpenCart)
          }}>
            <span className='icon-shopping-cart'></span>
            <span className='Counter'>{Counter}</span>
          </button>
          <button onClick={() => {
            setFilPhone(!FilPhone)
          }} className='icon-dots-three-vertical filter-phone'></button>
        </div>
      </div>
      <div className='market'>
        <div className="products">
          {
            filteredProducts.map((product) => {
              return (
                <div key={product.id} className="divproduct">
                  <img alt="phone" className='phoneimg' src={product.img}></img>

                  <p className='phone-info'>{product.brand} {product.model} {product.ozu} {product.storage} {product.color} </p>
                  <p>{"$" + product.price}</p>
                  <button className='btn-add' onClick={() => {
                    dispatch({
                      type: "add",
                      payload: {
                        id: product.id,
                        img: product.img,
                        brand: product.brand,
                        model: product.model,
                        ozu: product.ozu,
                        storage: product.storage,
                        color: product.color,
                        price: product.price,
                        counter: product.counter,
                      }
                    })
                  }}>
                    Add to cart
                    <span className='icon-shopping-cart'></span>
                  </button>
                </div>
              )
            })
          }
        </div>
        {OpenCart &&
          <div className="cart">
            {Counter === 0 ? <p className='cartxt'>Cart Is Empth</p> : <Cards Total={Total} dispatch={dispatch} SetTotal={SetTotal} Item={Item} SetItem={SetItem} Counter={Counter} Setcounter={Setcounter} state={state} />}
            <div className='total'>
              <span>Total:${Total} Items:{Item}</span>
            </div>
          </div>
        }
        {
          FilPhone &&
          <div className='filterdiv'>
            <h2>Filter Phones</h2>
            {/* Brands Filter */}
            <p>Brands</p>

            <button onClick={() => {
              setFilteredProducts(arr)
            }} className='btn-filter-brand'>All</button>

            <button onClick={() => {
              let SamsungArr = arr.filter((obj) => obj.brand.includes("Samsung"))
              setFilteredProducts(SamsungArr)
            }} className='btn-filter-brand'>Samsung</button>

            <button onClick={() => {
              let IphoneArr = arr.filter((obj) => obj.brand.includes("Iphone"))
              setFilteredProducts(IphoneArr)
            }} className='btn-filter-brand'>Iphone</button>

            <button onClick={() => {
              let XiaomiArr = arr.filter((obj) => obj.brand.includes("Xiaomi"))
              setFilteredProducts(XiaomiArr)
            }} className='btn-filter-brand'>Xioami</button>
            {/* End brand filter */}
            {/* Colors Filter */}
            <p>Colors</p>
            <button onClick={() => {
              setFilteredProducts(arr)
            }} className='btn-filter-brand'>All</button>

            <button onClick={() => {
              let WhiteColor = arr.filter((obj) => obj.color.includes("White"))
              setFilteredProducts(WhiteColor)
            }} className='btn-filter-color'>White</button>

            <button onClick={() => {
              let BlackColor = arr.filter((obj) => obj.color.includes("Black"))
              setFilteredProducts(BlackColor)
            }} className='btn-filter-color'>Black</button>

            <button onClick={() => {
              let GreenColor = arr.filter((obj) => obj.color.includes("Green"))
              setFilteredProducts(GreenColor)
            }} className='btn-filter-color'>Green</button>

            <button onClick={() => {
              let PurpleColor = arr.filter((obj) => obj.color.includes("Purple"))
              setFilteredProducts(PurpleColor)
            }} className='btn-filter-color'>Purple</button>

            <button onClick={() => {
              let BlueColor = arr.filter((obj) => obj.color.includes("Blue"))
              setFilteredProducts(BlueColor)

            }} className='btn-filter-color'>Blue</button>

            <button onClick={() => {
              let GrayColor = arr.filter((obj) => obj.color.includes("Gray"))
              setFilteredProducts(GrayColor)
            }} className='btn-filter-color'>Gray</button>

            <button onClick={() => {
              let VioletColor = arr.filter((obj) => obj.color.includes("Violet"))
              setFilteredProducts(VioletColor)
            }} className='btn-filter-color'>Violet</button>
            {/*End Colors Filter */}
            <p>Storage</p>
            {/*Storage Filter */}
            <button onClick={() => {
              setFilteredProducts(arr)
            }} className='btn-filter-brand'>All</button>
            <button onClick={() => {
              let Storage1 = arr.filter((obj) => obj.storage.includes("64gb"))
              setFilteredProducts(Storage1)
            }} className='btn-filter-color'>64gb</button>

            <button onClick={() => {
              let Storage2 = arr.filter((obj) => obj.storage.includes("128gb"))
              setFilteredProducts(Storage2)
            }} className='btn-filter-color'>128gb</button>

            <button onClick={() => {
              let Storage3 = arr.filter((obj) => obj.storage.includes("256gb"))
              setFilteredProducts(Storage3)
            }} className='btn-filter-color'>256gb</button>

            <button onClick={() => {
              let Storage4 = arr.filter((obj) => obj.storage.includes("512gb"))
              setFilteredProducts(Storage4)
            }} className='btn-filter-color'>512gb</button>
            {/*End Storage Filter */}
            <p>Ram</p>
             {/*Ram Filter */}
             <button onClick={() => {
              setFilteredProducts(arr)
            }} className='btn-filter-brand'>All</button>
            <button onClick={() => {
              let Ram0 = arr.filter((obj) => obj.ozu === "3gb")
              setFilteredProducts(Ram0)
            }} className='btn-filter-color'>3gb</button>

            <button onClick={() => {
              let Ram1 = arr.filter((obj) => obj.ozu === "4gb")
              setFilteredProducts(Ram1)
            }} className='btn-filter-color'>4gb</button>

            <button onClick={() => {
              let Ram2 = arr.filter((obj) => obj.ozu === "6gb")
              setFilteredProducts(Ram2)
            }} className='btn-filter-color'>6gb</button>

            <button onClick={() => {
              let Ram3 = arr.filter((obj) => obj.ozu === "8gb")
              setFilteredProducts(Ram3)
            }} className='btn-filter-color'>8gb</button>
             <button onClick={() => {
              let Ram4 = arr.filter((obj) => obj.ozu === "12gb")
              setFilteredProducts(Ram4)
            }} className='btn-filter-color'>12gb</button>
             <button onClick={() => {
              let Ram5 = arr.filter((obj) => obj.ozu === "16gb")
              setFilteredProducts(Ram5)
            }} className='btn-filter-color'>16gb</button>
              {/*End Ram Filter */}
          </div>

        }

      </div>

    </div>
  );
}

export default App;
