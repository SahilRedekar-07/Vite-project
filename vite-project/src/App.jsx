import React from 'react'
import CardUi from './components/CardUi'
import './CardUi.css'
import './App.css'

const App = () => {
  return (
    <div className='Parent'>
      <CardUi img="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" title="Amazon" description="Senior UI/UX Designer" salary="$120/hr"/>
      <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s" title="Google" description="Software Engineer" salary=""/>
      <CardUi img="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2-1024x441.jpg" title="Meta" description="Debugger" salary="$50/hr"/>
      <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KsTyTLoXmVKsZIBaY66VAgZG00tzgafH4RzsUYkGzZ_LtbzGno8bJig&s=10" title="Microsoft" description="Product Manager" salary="$100/hr"/>
    </div>
  )
}

export default App








{/* <CardUi img="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" title="Amazon" description="Senior UI/UX Designer" salary="$120/hr"/>
    <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s" title="Google" description="Software Engineer" salary=""/>
    <CardUi img="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2-1024x441.jpg" title="Meta" description="Debugger" salary="$50/hr"/>
    <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KsTyTLoXmVKsZIBaY66VAgZG00tzgafH4RzsUYkGzZ_LtbzGno8bJig&s=10" title="Microsoft" description="Product Manager" salary="$100/hr"/> */}