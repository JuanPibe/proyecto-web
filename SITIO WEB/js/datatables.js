$(document).ready(function() {
   
    var dataSet = [
        [1, 'Camiseta', 'Blanco', '$20', 'Hombre'],
        [2, 'Jeans', 'Azul', '$50', 'Hombre'],
        [3, 'Vestido', 'Rojo', '$80', 'Mujer'],
        [4, 'Chaqueta', 'Negro', '$100', 'Hombre'],
        [5, 'Zapatos deportivos', 'Gris', '$60', 'Hombre'],
        [6, 'Sudadera', 'Verde', '$40', 'Hombre'],
        [7, 'Pantalones cortos', 'Beige', '$25', 'Hombre'],
        [8, 'Blusa', 'Rosa', '$30', 'Mujer'],
        [9, 'Falda', 'Negro', '$35', 'Mujer'],
        [10, 'Camisa', 'Azul claro', '$45', 'Hombre'],
        [11, 'Abrigo', 'Marrón', '$150', 'Mujer'],
        [12, 'Botines', 'Negro', '$70', 'Mujer'],
        [13, 'Sandalias', 'Blanco', '$30', 'Mujer'],
        [14, 'Chaqueta de cuero', 'Marrón', '$120', 'Hombre'],
        [15, 'Conjunto de pijama', 'Gris', '$50', 'Mujer'],
        [16, 'Bufanda', 'Rojo', '$20', 'Mujer'],
        [17, 'Guantes', 'Negro', '$15', 'Hombre'],
        [18, 'Gorro', 'Azul', '$10', 'Hombre'],
        [19, 'Leggings', 'Negro', '$25', 'Mujer'],
        [20, 'Top deportivo', 'Gris', '$35', 'Mujer']
    ];
    
    $('#miTabla').DataTable({
        data: dataSet,
        columns: [
            { title: "Id" },
            { title: "Producto" },
            { title: "Color" },
            { title: "Precio" },
            { title: "Categoria" }
        ],
        language: {
            url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/Spanish.json"
        }
    });
});
