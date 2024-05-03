/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hcegxaph1e039d1")

  // remove
  collection.schema.removeField("1mr39yyy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xx7p43fq",
    "name": "protusao",
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
    "id": "1mr39yyy",
    "name": "estoma",
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
  collection.schema.removeField("xx7p43fq")

  return dao.saveCollection(collection)
})
