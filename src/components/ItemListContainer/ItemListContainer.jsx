import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { RiseLoader} from 'react-spinners';
import { getDocs, collection, query, where } from "firebase/firestore";
import db from '../../db/db.js'

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false)
  const { idCategoria } = useParams();

  const getProduts = async () =>{

    try{
      const productosRef = collection(db, "productos")
      const dataDb = await getDocs(productosRef)
      
      const data = dataDb.docs.map( (productDb) =>  {
          return { id: productDb.id, ...productDb.data() };
      });
  
      setProductos(data);

    } catch (error) {
      console.log(error)
    }
  };

  const getProdutsByCategory = async() => {

    try {
      const productosRef = collection (db, "productos")
      const q = query(productosRef, where("categoria", "==", idCategoria)) 
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
    });
  
      setProductos(data)

    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if(idCategoria){
      getProdutsByCategory()
    } else {
      getProduts();
    }
  }, [idCategoria]);

  return (
    <div>
      <p className=" parrafo">{saludo}</p>
      { estaCargando ? <div> <RiseLoader color="#00a2ff" margin={5} size={18}/>
      </div> : <ItemList productos={productos} />}
    </div>
  );
};
export default ItemListContainer;