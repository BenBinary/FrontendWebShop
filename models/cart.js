const fs = require('fs');
const path = require('path');

// P Variable ist der aktuelle Pfad gespeichert
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data',
    'cart.json'
  );



module.exports = class Cart {

    static addProduct(id) {

        // Fetch the previous card
        fs.readFile(p, (err, fileContent) => {

            let cart = { products: [], totalPrice: 0 };
            
            // Falls kein Error beim Einlesen vorliegt
            if (!err) {
                

                // Cart-Konstante wird gefüllt mit den Daten aus der Datei cart.json
                cart = JSON.parse(fileContent);

                fs.writeFile(p, () => {

                });

            } else {

            }

        });

        // Analyze the card => Find existing products

        // Add new product / increase quantity

    }


}