
let i = true
const inventory = []
let id = 0;
const badWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']
while (i) {
    const userInput = prompt(`Por favor ingresa una de las siguientes opciones: 
                            \n 1. Agregar un producto
                            \n 2. Duplicar un producto
                            \n 3. Ver productos
                            \n 4. Actualizar producto
                            \n 5. Verificar existencia e inventario
                            \n 6. Venta de productos
                            \n 7. Compra de productos
                            \n 8. Calculo valor total de inventario
                            \n 9. Ordenar productos
                            \n 10. Identificacion de productos con malas palabras
                            \n 11. Reporte general de productos
                            \n 12. Salir del sistema
                            `
    );
    switch (userInput) {
        case "1":
            const productName = prompt("Por favor ingresa el nombre del producto: ");
            const productPrice = prompt("Por favor ingresa el precio del producto: ");
            const productQuantity = prompt("Por favor ingresa la cantidad del producto: ");
            const productDescription = prompt("Por favor ingresa la descripcion del producto: ");
            const product = Object.assign({}, {
                id: ++id,
                productName,
                productPrice,
                productQuantity,
                productDescription
            })
       
            inventory.push(product);
            break;
        case "2":
       
            inventory.forEach((product, index) => {
                console.log(`Producto ${index + 1}: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
            });       const productId = prompt("Por favor ingresa el id del producto que deseas duplicar: ");
         
            const productToDuplicate = inventory[productId - 1];
            
            let matches = 0;
            inventory.forEach(product => {
                if (product.productName.startsWith(productToDuplicate.productName)) {
                    matches++;
                }
            });
            const duplicatedProduct = Object.assign({}, {
                id: ++id,
                productName: matches ? productToDuplicate.productName + ' Copy ' + matches : productToDuplicate.productName + ' Copy',
                productPrice: productToDuplicate.productPrice,
                productQuantity: productToDuplicate.productQuantity,
                productDescription: productToDuplicate.productDescription
            });
            inventory.push(duplicatedProduct);
            break;
        case "3":
            inventory.forEach((product, index) => {
                console.log(`Producto ${index + 1}: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
            });
            let j = true;
            while (j) {
                const userOption = prompt("Por favor ingresa una de las siguientes opciones: \n 1. Buscar productos por nombre \n 2. Buscar por productos por precio \n 3. Volver al menu principal");
                switch (userOption) {
                    case "1":
                        const productName = prompt("Por favor ingresa el nombre del producto: ");
                        const productsByName = inventory.filter(product => product.productName === productName);
                        productsByName.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
                        });
                        break;
                    case "2":
                        const productPrice = prompt("Por favor ingresa el precio del producto: ");
                        const productsByPrice = inventory.filter(product => product.productPrice === productPrice);
                        productsByPrice.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
                        });
                        break;
                    case "3":
                        j = false;
                        break;
                    default:
                        console.log("Opcion invalida");
                        break;
                }
            }
            break;
        case "4":
            inventory.forEach((product, index) => {
                console.log(`Producto ${index + 1}: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
            });
            const productIdToUpdate = prompt("Por favor ingresa el id del producto que deseas actualizar: ");
            const productNameUpdated = prompt("Por favor ingresa el nombre del producto o enter si deseas mantener el mismo: ");
            const productPriceUpdated = prompt("Por favor ingresa el precio del producto o enter si deseas mantener el mismo: ");
            const productQuantityUpdated = prompt("Por favor ingresa la cantidad del producto o enter si deseas mantener el mismo: ");
            const productDescriptionUpdated = prompt("Por favor ingresa la descripcion del producto o enter si deseas mantener el mismo: ");
            if (productNameUpdated) {
                inventory[productIdToUpdate - 1].productName = productNameUpdated;
            }
            if (productPriceUpdated) {
                inventory[productIdToUpdate - 1].productPrice = productPriceUpdated;
            }
            if (productQuantityUpdated) {
                inventory[productIdToUpdate - 1].productQuantity = productQuantityUpdated;
            }
            if (productDescriptionUpdated) {
                inventory[productIdToUpdate - 1].productDescription = productDescriptionUpdated;
            }
            break;
        case "5":
            const productNameToCheck = prompt("Por favor ingresa el nombre del producto: ");
            const productToCheck = inventory.find(product => product.productName === productNameToCheck);
            if (!productToCheck) {
                console.log("Producto no encontrado");
                break;
            }
            if (productToCheck.productQuantity === 0) {
                console.log("Producto agotado");
                break;
            }
            console.log(`Producto: ${productToCheck.productName} - ${productToCheck.productPrice} - ${productToCheck.productQuantity} - ${productToCheck.productDescription}`);
            break;
        case "6":
            const productNameToSell = prompt("Por favor ingresa el nombre del producto: ");
            const productToSell = inventory.find(product => product.productName === productNameToSell);
            if (!productToSell) {
                console.log("Producto no encontrado");
                break;
            }
            if (productToSell.productQuantity === 0) {
                console.log("Producto agotado");
                break;
            }
            productToSell.productQuantity--;
            console.log(`Venta realizada con exito, ${productToSell.productQuantity} unidades restantes`);
            break;
        case "7":
            const productNameToBuy = prompt("Por favor ingresa el nombre del producto: ");
            const productToBuy = inventory.find(product => product.productName === productNameToBuy);
            if (!productToBuy) {
                console.log("Producto no encontrado");
                break;
            }
            productToBuy.productQuantity++;
            console.log(`Compra realizada con exito, ${productToBuy.productQuantity} unidades disponibles`);
            break;
        case "8":
            const totalValue = inventory.reduce((acc, product) => acc + product.productPrice * product.productQuantity, 0);
            console.log(`El valor total del inventario es: ${totalValue}`);
            break;
        case "9":
            let k = true;
            while (k) {
                const userOption = prompt("Por favor ingresa una de las siguientes opciones: \n 1. Ordenar productos por nombre \n 2. Ordenar por precio \n 3. Volver al menu principal");
                switch (userOption) {
                    case "1":
                        inventory.sort((a, b) => a.productName.localeCompare(b.productName));
                        inventory.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
                        });
                        break;
                    case "2":
                        inventory.sort((a, b) => a.productPrice - b.productPrice);
                        inventory.forEach(product => {
                            console.log(`Producto: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
                        });
                        break;
                    case "3":
                        k = false;
                        break;
                    default:
                        console.log("Opcion invalida");
                        break;
                }
            }
            break;
        case "10":
            inventory.forEach(product => {
                const descriptionWords = product.productDescription.split(" ");
                descriptionWords.forEach(word => {
                    if (badWords.includes(word)) {
                        console.log(`Producto: ${product.productName} - ${product.productPrice} - ${product.productQuantity} - ${product.productDescription}`);
                    }
                });
            });
            break;
        case "11":
            const totalProducts = inventory.length;
            const totalValueInventory = inventory.reduce((acc, product) => acc + product.productPrice * product.productQuantity, 0);
            const mostExpensiveProducts = inventory.filter(product => product.productPrice === Math.max(...inventory.map(product => product.productPrice)));
            const cheapestProducts = inventory.filter(product => product.productPrice === Math.min(...inventory.map(product => product.productPrice)));
            const mostAvailableProducts = inventory.filter(product => product.productQuantity === Math.max(...inventory.map(product => product.productQuantity)));
            const leastAvailableProducts = inventory.filter(product => product.productQuantity === Math.min(...inventory.map(product => product.productQuantity)));
            const productsWithBadWords = inventory.filter(product => {
                const descriptionWords = product.productDescription.split(" ");
                return descriptionWords.some(word => badWords.includes(word));
            });
            console.log(`Cantidad de productos: ${totalProducts}`);
            console.log(`Valor total del inventario: ${totalValueInventory}`);
            console.log(`Cantidad de productos más caros: ${mostExpensiveProducts.length}`);
            console.log(`Cantidad de productos más baratos: ${cheapestProducts.length}`);
            console.log(`Cantidad de productos con mayor cantidad disponible: ${mostAvailableProducts.length}`);
            console.log(`Cantidad de productos con menor cantidad disponible: ${leastAvailableProducts.length}`);
            console.log(`Cantidad de productos con posibles malas palabras en la descripción: ${productsWithBadWords.length}`);
            break;
        case "12":
            i = false;
            break;
        default:
            break;
    }
}