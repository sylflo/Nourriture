define({ "api": [
  {
    "type": "get",
    "url": "/ingredients/id/:id",
    "title": "Request Ingredient informations with id",
    "name": "getIngredientById",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Ingredients unique ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The id of the ingredient was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
    "groupTitle": "Ingredients"
  }
] });