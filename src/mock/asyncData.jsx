export const productos = [
/*     {
        id: '1',
        name: 'Lector FreeStyle 2 (CGM)',
        description: 'El lector FreeStyle Libre 2 permite ver los datos recopilados por el sensor Freestyle Libre 2 Plus, ofreciendo información completa, con alarmas personalizables. Monitoreo Continuo de Glucosa.',
        price: 3300,
        stock: 5,
        category: 'lectores',
        img: 'https://i.postimg.cc/JhgrVkYn/4.png'
    }, */

    {
     /*    id: '2', */
        name: 'Lector AccuChek Active kit',
        description: 'Glucómetro que permite mediciones rápidas y efectivas en solo 5 segundos. Es ideal para pacientes que requieren control regular de su nivel de glucosa en sangre.',
        price: 2990,
        stock: 7,
        category: 'lectores',
        img: 'https://i.postimg.cc/jj9x073h/7.png'
    },

    {
    /*     id: '3', */
        name: 'Sensor GS1 Sibionics (CGM)',
        description: 'Sensor Sibionics con tecnología avanzada para monitoreo continuo de glucosa en sangre. Ideal para pacientes diabéticos que necesitan un control constante de su nivel de azúcar.',
        stock: 10,
        category: 'sensores',
        img: 'https://i.postimg.cc/5tG4dCKt/1.png'
    },

    {
    /*     id: '4', */
        name: 'Sensor FreeStyle 2 (CGM) (1 unid)',
        description: 'El sensor FreeStyle Libre 2 Plus es compatible con el lector FreeStyle Libre 2 (color azul). Puede comprobar su nivel de glucosa en cualquier momento y en cualquier lugar.',
        price: 2736,
        stock: 20,
        category: 'sensores',
        img: 'https://i.postimg.cc/PqNXR4yZ/3.png'
    },

    {
    /*     id: '5', */
        name: 'Tiras reactivas AccuChek (x50 unid)',
        description: 'Tiras Accu-Chek x25 unidades. Indicado para el autocontrol de la glucosa en sangre, es esencial para pacientes diabéticos que requieren mediciones periódicas.',
        price: 1300,
        stock: 40,
        category: 'tiras reactivas',
        img: 'https://i.postimg.cc/43Mfk92L/9.png'
    },

    {
    /*     id: '6', */
        name: 'Tiras Optium FreeStyle (x25 unid)',
        description: 'Tiras Optium Freestyle x25 unidades. Diseñados para la determinación de glucosa en sangre capilar, permiten realizar pruebas de glucemia de manera rápida y precisa.',
        price: 1100,
        stock: 30,
        category: 'tiras reactivas',
        img: 'https://i.postimg.cc/g05zFZtq/6.png'
    },

    {
    /*     id: '7', */
        name: 'Agujas BD Ultra-Fine 4mm (x100 unid)',
        description: 'Agujas x100 unidades, de 4mm y 31G para una administración precisa de insulina.',
        price: 3175,
        stock: 50,
        category: 'accesorios',
        img: 'https://i.postimg.cc/5tG4dCK3/8.png'
    },

    {
    /*     id: '8', */
        name: 'Agujas Novofine 8mm (x100 unid)',
        description: 'Agujas x100 unidades, de 8mm y 30G para una administración precisa de insulina en mayor profundidad.',
        price: 3462,
        stock: 45,
        category: 'accesorios',
        img: 'https://i.postimg.cc/rpbVXrZG/5.png'
    },

    {
    /*     id: '9', */
        name: 'Parches protectores Sensor FreeStyle Libre 2 (x10 unid)',
        description: 'Pack x 10 Protectores autoadhesivos para sensor Freestyle Libre 1 y 2. Hipoalergénico, fabricado en algodón.',
        stock: 100,
        category: 'accesorios',
        img: 'https://i.postimg.cc/0N3kRwXr/2.png'
    },


];
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

//FUNCION PARA OBTENER UN PRODUCTO POR ID
export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let prod = productos.find((producto) => producto.id === id);
            resolve(prod);
        }, 2000);
    });
};
