/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "msup1bycn7rowny",
    "created": "2024-04-26 12:45:02.003Z",
    "updated": "2024-04-26 12:45:02.003Z",
    "name": "cirurgias",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8lonw4uk",
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
      },
      {
        "system": false,
        "id": "iavgybow",
        "name": "data",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "yekfsuvf",
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
  const collection = dao.findCollectionByNameOrId("msup1bycn7rowny");

  return dao.deleteCollection(collection);
})
