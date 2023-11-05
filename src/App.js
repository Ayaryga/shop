import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      Items: [
        {
          id: 1,
          title: 'Фільтр повітря',
          img: "filter1.jpg",
          desc: 'Фільтр для форд фокус',
          category: "filters",
          price: '20.99'

        },
        {
          id: 2,
          title: 'Фільтр повітря',
          img: "filter2.jpg",
          desc: 'Фільтр для форд мустанг',
          category: "filters",
          price: '22.99'

        },
        {
          id: 3,
          title: 'Фільтр повітря',
          img: "filter3.jpg",
          desc: 'Фільтр для форд мондео',
          category: "filters",
          price: '30.99'

        },
        {
          id: 4,
          title: 'Фільтр повітря',
          img: "filter4.jpg",
          desc: 'Фільтр для фіат тіпо',
          category: "filters",
          price: '24.99'

        },
        {
          id: 5,
          title: 'Фільтр масляний',
          img: "filter5.jpg",
          desc: 'Фільтр для ланос',
          category: "oil",
          price: '20.99'

        },
        {
          id: 6,
          title: 'Фільтр масляний',
          img: "filter6.jpg",
          desc: 'Фільтр для renoult',
          category: "oil",
          price: '10.99'

        },
        {
          id: 7,
          title: 'Фільтр масляний',
          img: "filter7.jpg",
          desc: 'Фільтр для fiat',
          category: "oil",
          price: '25.99'

        },
        {
          id: 8,
          title: 'Фільтр масляний',
          img: "filter8.jpg",
          desc: 'Фільтр для wv golf',
          category: "oil",
          price: '28.99'

        },
        {
          id: 9,
          title: 'Лампа-лед',
          img: "filter9.jpg",
          desc: 'лампа в фару рено',
          category: "led-lamp",
          price: '25.99'

        },
        {
          id: 10,
          title: 'Лампа-лед',
          img: "filter10.jpg",
          desc: 'лампа в фару пежо ',
          category: "led-lamp",
          price: '29.99'

        },
        {
          id: 11,
          title: 'Лампа-лед',
          img: "filter11.jpg",
          desc: 'лампа в фару ланос',
          category: "led-lamp",
          price: '22.99'

        },
       
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.Items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
 
  addToOrder(item) {
    let isInArray = false

    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
     this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
