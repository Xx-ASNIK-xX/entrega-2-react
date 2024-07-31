const productos = [
    {
      id: "Rtx123",
      nombre: "Ea Sport fc 24",
      descripcion: "",
      precio: 200,
      categoria: "deportes",
      stock: 10,
      imagen: "/img/fc.webp"
    },
    {
      id: "Frg333",
      nombre: "God Of War Ragnarök",
      descripcion: "",
      precio: 500,
      categoria: "aventura",
      stock: 2,
      imagen: "/img/god.webp"
    }
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    });
  };
  
  export default obtenerProductos