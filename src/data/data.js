const productos = [
    {
        id: "Keller1",
        nombre: "Keller Stratus 150 Full",
        descripcion: "",
        precio: 2090940,
        categoria: "Calle",
        stock: 10,
        imagen: "/img/moto1.jpg"
    },
    {
        id: "Corven1",
        nombre: "Corven Hunter 150 Base",
        descripcion: "",
        precio: 1598000,
        categoria: "Calle",
        stock: 12,
        imagen: "/img/moto2.jpg"
    },
    {
          id: "Honda1",
        nombre: "Honda GLH 150",
        descripcion: "",
        precio: 3698000,
        categoria: "Calle",
        stock: 8,
        imagen: "/img/moto3.jpg"
    },
    {
        id: "Bajaj1",
        nombre: "Bajaj Boxer 150",
        descripcion: "",
        precio: 2502940,
        categoria: "Calle",
        stock: 12,
        imagen: "/img/moto5.jpeg"
    },
    {
        id: "Gilera2",
        nombre: "Gilera Smash 110 Automatica",
        descripcion: "",
        precio: 500,
        categoria: "Scooter",
        stock: 10,
        imagen: "/img/moto4.jpg"
    },
    {
        id: "Hero2",
        nombre: "Hero Dash 125 con Baul",
        descripcion: "",
        precio: 1348000,
        categoria: "Scooter",
        stock: 5,
        imagen: "/img/moto6.jpg"
    },
    {
        id: "Yamaha2",
        nombre: "Yamaha Fascino 125",
        descripcion: "",
        precio: 3098000,
        categoria: "Scooter",
        stock: 10,
        imagen: "/img/moto7.jpg"
    },
    {
        id: "Honda2",
        nombre: "Honda PCX 160 2023",
        descripcion: "",
        precio: 7198000,
        categoria: "Scooter",
        stock: 7,
        imagen: "/img/moto8.jpg"
    },
    {
        id: "Keller3",
        nombre: "Keller Miracle 150",
        descripcion: "",
        precio: 1898000,
        categoria: "Enduro",
        stock: 4,
        imagen: "/img/moto9.jpg"
    },    
    {
        id: "Zanella3",
        nombre: "Zanella ZT 150",
        descripcion: "",
        precio: 2098000,
        categoria: "Enduro",
        stock: 5,
        imagen: "/img/moto10.jpg"
    },
    {
        id: "Yamaha3",
        nombre: "Yamaha XTZ 125",
        descripcion: "",
        precio: 4498000,
        categoria: "Enduro",
        stock: 9,
        imagen: "/img/moto11.jpg"
    },
    {
        id: "Honda3",
        nombre: "Honda XR 250",
        descripcion: "",
        precio: 6598000,
        categoria: "Enduro",
        stock: 6,
        imagen: "/img/moto12.jpg"
    }
    
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red
      setTimeout(() => {
        resolve(productos)
      }, 100);
    });
  };
  
  export default obtenerProductos