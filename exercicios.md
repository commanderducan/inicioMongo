# Base de datos libros

> Crea unha función en JS para insertar a través desa función a seguinte bbdd

```js
db.libros.insertOne(
  {
    _id: 1,  
    titulo: 'El aleph',
    autor: 'Borges',
    editorial: ['Siglo XXI','Planeta'],
    precio: 20,
    cantidad: 50 
  }
)
db.libros.insertOne(
  {
    _id: 2,  
    titulo: 'Martin Fierro',
    autor: 'Jose Hernandez',
    editorial: ['Siglo XXI'],
    precio: 50,
    cantidad: 12
  }
)
db.libros.insertOne(
  {
    _id: 3,  
    titulo: 'Aprenda PHP',
    autor: 'Mario Molina',
    editorial: ['Siglo XXI','Planeta'],
    precio: 50,
    cantidad: 20
  }
)
db.libros.insertOne(
  {
    _id: 4,  
    titulo: 'Java en 10 minutos',
    editorial: ['Siglo XXI'],
    precio: 45,
    cantidad: 1 
  }
)
```


- Insertar 2 documentos na colección libros
- Intentar insertar un documento con clave repetida (qué di a consola?, o permite?)
- Mostrar todos os documentos
- Agrega unha colección chamada "posts" e inserta 1 documento cunha estructura calquera
- Cantas bbdd podes visualizar agora mesmo?
- Elimina a coleción chamada "posts"
- Crea outra bbdd chamada borrar, introdúcelle un dato calquera
- Borra a base de datos creada no punto anterior
- Crea a seguinte bbdd, elixe un nome apropiado:

```js
db.artigos.insertOne(
  {
    _id: 1,  
    nombre: 'MULTIFUNCION HP DESKJET 2675',
    rubro: 'impresora',
    precio: 3000,
    stock: 20 
  }
)
db.artigos.insertOne(
  {
    _id: 2,  
    nombre: 'MULTIFUNCION EPSON EXPRESSION XP241',
    rubro: 'impresora',
    precio: 3700,
    stock: 5 
  }
)
db.artigos.insertOne(
  {
    _id: 3,  
    nombre: 'LED 19 PHILIPS',
    rubro: 'monitor',
    precio: 4500,
    stock: 2
  }
)
db.artigos.insertOne(
  {
    _id: 4,  
    nombre: 'LED 22 PHILIPS',
    rubro: 'monitor',
    precio: 5700,
    stock: 4
  }
)
db.artigos.insertOne(
  {
    _id: 5,  
    nombre: 'LED 27 PHILIPS',
    rubro: 'monitor',
    precio: 12000,
    stock: 1
  }
)

db.artigos.insertOne(
  {
    _id: 6,  
    nombre: 'LOGITECH M90',
    rubro: 'mouse',
    precio: 300,
    stock: 4
  }
)


```
## Utilización de comparadores
- Imprime todos os datos da bbdd creada
- Imprimir todos os documentos da colección 'artigos' que non son impresoras.
- Imprimir todos os artigos que pertencen ou rubro de 'mouse'.
- Imprimir todos os artigos cun precio maior o igual a 5000.
- Imprimir todas as impresoras que teñen un precio maior ou igual a 3500.
- Imprimir todos os artigos cuxo stock atópase comprendido entre 0 y 4.

## Borrado de datos
- Borra os documentos da colección 'artículos' onde 'rubro' son 'impresoras'
- Borra todos os artigos que teñen un '_id' maior ou igual a 5.

## Modificación 
- Modifica o prezo do mouse 'LOGITECH M90'
- Fixa o stock en 0 do artigo onde o '_id' é 6.
