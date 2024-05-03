/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bdavopansoz4zfz",
    "created": "2024-04-26 02:57:24.037Z",
    "updated": "2024-04-26 02:57:24.037Z",
    "name": "consultas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rxhggsl2",
        "name": "hospital",
        "type": "text",
        "required": false,
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
        "id": "routwtpn",
        "name": "medico",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("bdavopansoz4zfz");

  return dao.deleteCollection(collection);
})
