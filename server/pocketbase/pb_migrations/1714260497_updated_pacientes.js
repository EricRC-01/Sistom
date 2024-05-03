/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yf3nn3w7",
    "name": "dataInsc",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adn0axk3",
    "name": "dataNasc",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // remove
  collection.schema.removeField("yf3nn3w7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adn0axk3",
    "name": "dataNasc",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "1900-04-01 12:00:00.000Z",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
