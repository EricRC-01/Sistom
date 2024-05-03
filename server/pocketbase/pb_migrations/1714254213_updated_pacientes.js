/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "moxqmzqe",
    "name": "convenio",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // remove
  collection.schema.removeField("moxqmzqe")

  // remove
  collection.schema.removeField("adn0axk3")

  return dao.saveCollection(collection)
})
