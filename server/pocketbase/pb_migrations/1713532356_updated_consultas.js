/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9kodqd3poz474em")

  // remove
  collection.schema.removeField("fzpvpgth")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxfpyekm",
    "name": "data",
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
  const collection = dao.findCollectionByNameOrId("9kodqd3poz474em")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzpvpgth",
    "name": "data",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("vxfpyekm")

  return dao.saveCollection(collection)
})
