/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qk3q3s12",
    "name": "efluente",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "Fezes formadas",
        "Fezes pastosas",
        "Fezes líquidas",
        "Fezes semilíquidas",
        "Muco",
        "Urina"
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
    "id": "qk3q3s12",
    "name": "efluente",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "Formada",
        "Pastosa",
        "Líquida",
        "Semilíquida",
        "Muco",
        "Urina"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
