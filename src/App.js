import ProductList from './components/ProductList/ProductList'
import AdminForm from './components/AdminForm/AdminForm'
import Filters from './components/Filters/Filters'
import './App.css'

function App() {
  return (
    <div className="App">
      <Filters />
      <ProductList />
      <AdminForm />
    </div>
  )
}

export default App;
