/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("msup1bycn7rowny")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dscqsziw",
    "name": "paciente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p7v8ksybcx1ko28",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("msup1bycn7rowny")

  // remove
  collection.schema.removeField("dscqsziw")

  return dao.saveCollection(collection)
})
