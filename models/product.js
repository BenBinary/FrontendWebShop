const fs = require('fs');
const products = [];
const path = require('path');

const Cart = require("./cart");


// P Variable ist der aktuelle Pfad gespeichert
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data',
    'products.json'
  );





// Zugriff auf die JSON-Datei um die Daten zu speichern
const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
      if (err) {
         cb([]);
      } else {
        
        cb(JSON.parse(fileContent));
      }
  });  
}

module.exports = class Product {

    constructor(id, title, imageURL, description, price) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
        
        
        // products ist wieder Callback und (Callback-)Funktion wird ausgeführt nachdem die eigentliche Methode ausgeführt wurde
        getProductsFromFile(products => {

                // Ob die ID bereits exisitert
                if (this.id) {

                    const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                    const updatedProducts = [...products];
                    updatedProducts[existingProductIndex] = this;       // Überschreiben bestehender Index
                    fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                        console.log(err);
                    });
 
                } else {

                    var intID = 0;
                    // Eine neue ID wird generiert
                    intID = Math.random() * 10000;
                    intID = parseInt(intID);
                    this.id = intID;

                    // aktuelles Objekt wird dem Array hinzugefügt
                    products.push(this);

                    // das aktuelle Objekt wird überschrieben
                    fs.writeFile(p, JSON.stringify(products), (err) => {
                        console.log(err);
                    });

                }

        });
    }

    static deleteById(id) {

        getProductsFromFile(products => {

            const product = products.find(prod => prod.id === id);

            // Excluding einer bestimmter IDs
            const updatedProducts = products.filter(prod => prod.id !== id);

            // Das aktualisierte Array wird gespeichert
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    // if Product wont stay in the card anymore 

                    Cart.deleteProduct(id, product.price);

                    
                }
            });           
            
            
        });

    }

    static fetchAll(cb) {

        // cb für Callback 
        getProductsFromFile(cb);

    }


    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
            
        });
    }
}