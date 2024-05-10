/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlgxscyfafpvabx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amym3vta",
    "name": "sexo",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Masculino",
        "Feminino"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlgxscyfafpvabx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amym3vta",
    "name": "sexo",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "masculino",
        "feminino"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
