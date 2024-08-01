const productos = [
    {
        id: "Keller1",
        nombre: "Keller Stratus 150 Full",
        descripcion: "Cilindrada, 150 cc ; Transmisión, Manual 5 velocidades ; Arranque, Eléctrico y a patada.",
        precio: 2090940,
        categoria: "Calle",
        stock: 10,
        imagen: "/img/moto1.jpg"
    },
    {
        id: "Corven1",
        nombre: "Corven Hunter 150 Base",
        descripcion: "Cilindrada, 150 cc ; Freno a disco. Transmisión, Manual 5 velocidades Capacidad del tanque de 12 L.",
        precio: 1598000,
        categoria: "Calle",
        stock: 12,
        imagen: "/img/moto2.jpg"
    },
    {
          id: "Honda1",
        nombre: "Honda GLH 150",
        descripcion: "Cilindrada, 149,2 cc ; Freno a disco. Transmisión, Manual 5 velocidades e inyerccion electronica",
        precio: 3698000,
        categoria: "Calle",
        stock: 8,
        imagen: "/img/moto3.jpg"
    },
    {
        id: "Bajaj1",
        nombre: "Bajaj Boxer 150",
        descripcion: "Cilindrada, 144,8 cc ; Freno a tambor. Transmisión, Manual 5 velocidades Capacidad del tanque de 11 L.",
        precio: 2502940,
        categoria: "Calle",
        stock: 12,
        imagen: "/img/moto5.jpeg"
    },
    {
        id: "Gilera2",
        nombre: "Gilera Smash 110",
        descripcion: "Cilindrada, 107 cc ; Freno a tambor. Transmisión, automatica. Capacidad del tanque de 4,1 L.",
        precio: 1348000,
        categoria: "Scooter",
        stock: 10,
        imagen: "/img/moto4.jpg"
    },
    {
        id: "Hero2",
        nombre: "Hero Dash 125 con Baul",
        descripcion: "Cilindrada, 125 cc ; Freno a tambor. Transmisión, automatica. Capacidad del tanque de 2,8 L.",
        
        precio: 1348000,
        categoria: "Scooter",
        stock: 5,
        imagen: "/img/moto6.jpg"
    },
    {
        id: "Yamaha2",
        nombre: "Yamaha Fascino 125",
        descripcion: "Cilindrada, 125 cc ; Freno a disco delantero. Transmisión, automatica. Capacidad del tanque de 5,2 L.",
        precio: 3098000,
        categoria: "Scooter",
        stock: 10,
        imagen: "/img/moto7.jpg"
    },
    {
        id: "Honda2",
        nombre: "Honda PCX 160 2023",
        descripcion: "Cilindrada, 156,93 cc ; Freno a disco delantero. Transmisión, automatica. Capacidad del tanque de 7,7 L.",
        precio: 7198000,
        categoria: "Scooter",
        stock: 7,
        imagen: "/img/moto8.jpg"
    },
    {
        id: "Keller3",
        nombre: "Keller Miracle 150",
        descripcion: "Cilindrada, 149 cc ; Freno a tambor. Transmisión manual. Capacidad del tanque de 11 L.",
        precio: 1898000,
        categoria: "Enduro",
        stock: 4,
        imagen: "/img/moto9.jpg"
    },    
    {
        id: "Zanella3",
        nombre: "Zanella ZT 150",
        descripcion: "Cilindrada, 145 cc ; Freno a disco. Transmisión manual. Capacidad del tanque de 12 L.",
        precio: 2098000,
        categoria: "Enduro",
        stock: 5,
        imagen: "/img/moto10.jpg"
    },
    {
        id: "Yamaha3",
        nombre: "Yamaha XTZ 125",
        descripcion: "Cilindrada, 124 cc ; Freno a disco. Transmisión manual. Capacidad del tanque de 10,6 L.",
        precio: 4498000,
        categoria: "Enduro",
        stock: 9,
        imagen: "/img/moto11.jpg"
    },
    {
        id: "Honda3",
        nombre: "Honda XR 250",
        descripcion: "Cilindrada, 149 cc ; Freno a disco. Transmisión manual. Capacidad del tanque de 23 L.",
        precio: 6598000,
        categoria: "Enduro",
        stock: 6,
        imagen: "/img/moto12.jpg"
    }
    
  ]
  
  const obtenerProductos = () => { 
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(productos)
      }, 1000); // con este numero simulamos el retraso de red 0 servidor
    });
  };
  
  export default obtenerProductos