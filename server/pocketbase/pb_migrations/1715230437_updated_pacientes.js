/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tgblhsn",
    "name": "recadastro",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Presencial",
        "Remoto"
      ]
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p7v8ksybcx1ko28")

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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tgblhsn",
    "name": "recadastro",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "presencial",
        "remoto"
      ]
    }
  }))

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
})
