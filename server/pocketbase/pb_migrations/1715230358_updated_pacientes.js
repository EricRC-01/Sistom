/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjr02uki",
    "name": "mobilidade",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Deambula",
        "Deambula com auxílio",
        "Não deambula"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjr02uki",
    "name": "mobilidade",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "deambula",
        "auxilio",
        "não deambula"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
