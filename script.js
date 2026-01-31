const productos = [
{
id: 1,
nombre: "Zapatillas Runner",
categoria: "deportivos",
imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
id: 2,
nombre: "Zapatos Casual Urban",
categoria: "casuales",
imagen: "<img src="image/calzado1.png" alt="Mi Logo" width="200">
"
},
{
id: 3,
nombre: "Zapatos Elegantes",
categoria: "formales",
imagen: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
},
{
id: 4,
nombre: "Tenis Street",
categoria: "deportivos",
imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
}
];


const tallas = [38, 39, 40, 41, 42, 43];


const contenedorProductos = document.getElementById("productos");
const contenedorSeleccion = document.getElementById("seleccion");


function mostrarProductos(lista) {
contenedorProductos.innerHTML = "";


lista.forEach(producto => {
const card = document.createElement("div");
card.classList.add("producto");


card.innerHTML = `
<img src="${producto.imagen}?auto=format&fit=crop&w=400&q=80" alt="${producto.nombre}">
<h3>${producto.nombre}</h3>
<p>Categoría: ${producto.categoria}</p>
<select id="talla-${producto.id}">
${tallas.map(t => `<option value="${t}">Talla ${t}</option>`).join("")}
</select>
<button onclick="seleccionarProducto(${producto.id})">Seleccionar</button>
`;


contenedorProductos.appendChild(card);
});
}


function filtrarCategoria(categoria) {
if (categoria === "todos") {
mostrarProductos(productos);
} else {
const filtrados = productos.filter(p => p.categoria === categoria);
mostrarProductos(filtrados);
}
}


function seleccionarProducto(id) {
const producto = productos.find(p => p.id === id);
const tallaSeleccionada = document.getElementById(`talla-${id}`).value;


const item = document.createElement("p");
item.textContent = `${producto.nombre} - Talla ${tallaSeleccionada}`;


contenedorSeleccion.appendChild(item);
}


// Mostrar todos al cargar

mostrarProductos(productos);

