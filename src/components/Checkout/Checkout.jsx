import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import db from '../../db/db.js';
import validateForm from '../../utils/validacionFormulario.js';
import { toast } from 'react-toastify';

import './Checkout.css';

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal, clearCart } = useContext(CartContext); // Asegúrate de tener clearCart en tu contexto
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    // Formatear correctamente la información de la orden a subir
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    // Validar los campos del formulario antes de enviar la orden
    const response = await validateForm(datosForm);
    if (response.status === 'success') {
      sendOrder(orden);
    } else {
      toast.warning(response.message);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, 'ordenes');
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDb.id);
      clearCart(); // Limpiar el carrito después de que la orden sea exitosa
    } catch (error) {
      console.log(error);
    }
  };

  const handleVolver = () => {
    window.location.href = '/'; // Redirige a la página principal y recarga la página
  };
  
  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-completed">
          <h2>Orden completada correctamente! ✔️​</h2>
          <p>Guarde el id de su orden generada: {idOrden}</p>
          <button className='butoon1' onClick={handleVolver}>Volver al Inicio</button> {/* Botón para volver */}
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;