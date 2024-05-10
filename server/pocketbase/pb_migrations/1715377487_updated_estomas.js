/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcegxaph1e039d1")

  // remove
  collection.schema.removeField("s7cb3y3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jj3pquyr",
    "name": "tipoEstoma",
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
  const collection = dao.findCollectionByNameOrId("hcegxaph1e039d1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7cb3y3g",
    "name": "tipo",
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

  // remove
  collection.schema.removeField("jj3pquyr")

  return dao.saveCollection(collection)
})
