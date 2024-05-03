/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rjxm0wmx",
    "name": "profissao",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // remove
  collection.schema.removeField("rjxm0wmx")

  return dao.saveCollection(collection)
})
