/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qk3q3s12",
    "name": "efluente",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "formada",
        "pastosa",
        "liquida",
        "semiliquida",
        "muco",
        "urina"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // remove
  collection.schema.removeField("qk3q3s12")

  return dao.saveCollection(collection)
})
