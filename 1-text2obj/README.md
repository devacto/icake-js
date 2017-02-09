# text2obj

In this puzzle, we are to convert order data from csv to JSON object.

From
```
Matthew,ice-cream,5,2
Matthew,book,5,3
Matthew,computer,10,1
```

to
```
{
    "Matthew": {
        orders: [{name: "ice-cream", price: 5, quantity: 2},
            {name: "book", price: 5, quantity: 3},
            {name: "computer", price: 10, quantity: 1}], 
        total: 40
    }
}
```
