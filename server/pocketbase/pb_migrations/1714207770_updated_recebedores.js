/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlgxscyfafpvabx")

  // remove
  collection.schema.removeField("bkj5gomu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwtvswnu",
    "name": "paciente",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p7v8ksybcx1ko28",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlgxscyfafpvabx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkj5gomu",
    "name": "paciente",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("zwtvswnu")

  return dao.saveCollection(collection)
})
