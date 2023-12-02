import React from 'react'
import "./Cards.css"
export default function Cards({ state, dispatch, Total, SetTotal, Counter, Setcounter, Item, SetItem }) {
  return (
    <>
      {
        state.map((st) => {
          return (
            <div key={st.id} className='carts'>
              <img alt='phone' className='cart-phone' src={st.img}></img>
              <span>{st.brand} {st.model} {st.ozu} {st.storage} {st.color} </span>
              <p>{"$" + st.price * st.counter}</p>
              <div>
                <button className='phone-counter' onClick={() => {
                  if (st.counter !== 1) {
                    st.counter-=1
                    SetTotal(Total -= st.price)
                    Setcounter(Counter -= 1)
                    SetItem(Item -= 1)
                  }

                }}>-</button>
                <span>{st.counter}</span>
                <button className='phone-counter' onClick={() => {
                  if (st.counter !== 10) {
                    st.counter+=1
                    SetTotal(Total += st.price)
                    Setcounter(Counter += 1)
                    SetItem(Item += 1)
                  }

                }}>+</button>
              </div>
              <span className='Xbtn icon-close' onClick={() => {
                dispatch({
                  type: "delete",
                  payload: {
                    id: st.id,
                    counter: st.counter,
                    price: st.price,
                  }
                })
              }}></span>
            </div>
          )
        })
      }
    </>
  )
}
