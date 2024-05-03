/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // add
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
        "nao"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyiz6i2e",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

  // remove
  collection.schema.removeField("fjr02uki")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyiz6i2e",
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
})
