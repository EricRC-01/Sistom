/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qlgxscyfafpvabx",
    "created": "2024-04-27 08:44:09.133Z",
    "updated": "2024-04-27 08:44:09.133Z",
    "name": "recebedores",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6rdd4bg5",
        "name": "nome",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g0mto4ke",
        "name": "cpf",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
            "m",
            "f"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qlgxscyfafpvabx");

  return dao.deleteCollection(collection);
})
