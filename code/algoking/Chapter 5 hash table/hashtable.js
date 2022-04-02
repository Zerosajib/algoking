const book = {} // an empty hash table 
book["apple"] = 0.32
book["Mango"] = 43;
book["Milk"] = 23;
console.log(book) // {apple: 0.32, Mango: 43, Milk: 23}
console.log(book["Mango"]) // 43 

const phoneBook = {}
phoneBook["sajib"] = 1307511515
console.log(phoneBook["sajib"])

const voted = {}
function check_voter(name) {
    if (voted[name]) {
        console.log("kick them out")
    } else {
        voted[name] = true
        console.log("let them vote! ")

    }
}
check_voter("tom"); // let them vote!
check_voter("mike"); // let them vote!
check_voter("mike"); // kick them out!


class HashTable {
    constructor(size = 50) {
        this.buckets = new Array(size)
        this.size = size
    }

    hash(key) {
        return key.toString().length % this.size;
    }

    // Insert data
    setItem(key, value) {
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value])
        return index
    }

    // Search data
    getItem(key) {
        let index = this.hash(key);

        if (!this.buckets[index]) return null

        for (let bucket of this.buckets[index]) {
            // key
            if (bucket[0] === key) {
                // value
                return bucket[1]
            }
        }
    }
}

const hashTable = new HashTable();
// Insert data to the hash table
hashTable.setItem("bk101", "Data structures algorithms");
hashTable.setItem("bk108", "Data analytics");
hashTable.setItem("bk200", "Cyber security");
hashTable.setItem("bk259", "Business Intelligence");
hashTable.setItem("bk330", "S/W Development");

// Search data from the hash table 
hashTable.getItem("bk101");
console.log(hashTable.getItem("bk101"));


/**
* Class HashTable
* @param {Object} obj
*/
const HashTable = function (obj) {
    let length = 0;
    this._items = (function (obj) {
        let items = {};
        for (let p in obj) {
            items[p] = obj[p];
            length++;
        }
        return items;
    })(obj);

    /**
     * Associates the specified value to the specified key
     * @param {string} key The key to which associate the value
     * @param {string} value The value to associate to the key
     * @returns {(undefined|Object)} Undefined is object didn't exists before this call
     */
    this.set = function (key, value) {
        let previous = undefined;

        if (this.has(key)) {
            previous = this._items[key];
        } else {
            length++;
        }

        this._items[key] = value;

        return previous;
    };

    /**
     * Returns the value associated to the specified key
     * @param {string} key The key from which retrieve the value
     * @returns {(undefined|string)} Undefined or associated value
     */
    this.get = function (key) {
        return this._items.hasOwnProperty(key) ? this._items[key] : undefined;
    };

    /**
     * Returns whether the hashtable contains the specified key
     * @param {string} key The key to check
     * @returns {boolean}
     */
    this.has = function (key) {
        return this._items.hasOwnProperty(key);
    };

    /**
     * Removes the specified key with its value
     * @param {string} key The key to remove
     * @returns {(undefined|string)} Undefined if key doesn't exist and
     * string (previous value) - value of deleted item
     */
    this.remove = function (key) {
        if (this.has(key)) {
            let previous = this._items[key];
            length--;
            delete this._items[key];
            return previous;
        } else {
            return undefined;
        }
    };

    /**
     * Returns an array with all the registered keys
     * @returns {Array}
     */
    this.getKeys = function () {
        let keys = [];

        for (let i in this._items) {
            if (this.has(i)) {
                keys.push(i);
            }
        }

        return keys;
    };

    /**
     * Returns an array with all the registered values
     * @returns {Array}
     */
    this.getValues = function () {
        let values = [];

        for (let i in this._items) {
            if (this.has(i)) {
                values.push(this._items[i]);
            }
        }

        return values;
    };

    /**
     * Iterates all entries in the specified iterator callback
     * @param {function} callback A method with 2 parameters: key, value
     */
    this.each = function (callback) {
        for (let i in this._items) {
            if (this.has(i)) {
                callback(i, this._items[i]);
            }
        }
    };

    /**
     * Deletes all the key-value pairs on the hashmap
     */
    this.clear = function () {
        this._items = {};
        length = 0;
    };

    /**
     * Gets the count of the entries in the hashtable
     */
    Object.defineProperty(this, "length", {
        get: function () {
            return length;
        }
    });

    /**
     * Gets an array of all keys in the hashtable
     */
    Object.defineProperty(this, "keys", {
        get: function () {
            return this.getKeys();
        }
    });

    /**
     * Gets an array of all values in the hashtable
     */
    Object.defineProperty(this, "values", {
        get: function () {
            return this.getValues();
        }
    });
};

const hashtable = new HashTable({ one: 1, two: 2, three: 3, cuatro: 4 });

console.log("Original length: " + hashtable.length); // Original length: 4
console.log('Value of key "one": ' + hashtable.get("one")); // Value of key "one": 1
console.log('Has key "foo"? ' + hashtable.has("foo")); // Has key "foo"? false
console.log('Previous value of key "foo": ' + hashtable.set("foo", "bar")); // Previous value of key "foo": undefined
console.log("Length after set: " + hashtable.length); // Length after set: 5
console.log('Value of key "foo": ' + hashtable.get("foo")); // Value of key "foo": bar
console.log('Value of key "cuatro": ' + hashtable.get("cuatro")); // Value of key "cuatro": 4
console.log("Get keys by using property: " + hashtable.keys); // Get keys by using property: one,two,three,cuatro,foo
hashtable.clear();
console.log("Length after clear: " + hashtable.length); // Length after clear: 0
