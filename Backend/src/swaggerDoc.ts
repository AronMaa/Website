const swaggerDoc = {
    "openapi": "3.0.0",
    "info": {
        "title": "Learning Package API",
        "version": "1.0.0",
        "description": "API for managing learning packages and associated facts."
    },
    "paths": {
        "/swagger.json": {
            "get": {
                "summary": "Get Swagger JSON",
                "operationId": "getSwaggerJson",
                "responses": {
                    "200": {
                        "description": "Swagger JSON file",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SwaggerJson"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/liveness": {
            "get": {
                "summary": "Liveness check",
                "operationId": "livenessCheck",
                "responses": {
                    "200": {
                        "description": "Service is up",
                        "content": {
                            "text/plain": {
                                "example": "OK"
                            }
                        }
                    }
                }
            }
        },
        "/api/package": {
            "get": {
                "summary": "Get all learning packages",
                "operationId": "getAllPackages",
                "responses": {
                    "200": {
                        "description": "A list of learning packages",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/LearningPackage"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "post": {
                "summary": "Create a new learning package",
                "operationId": "createLearningPackage",
                "requestBody": {
                    "description": "Learning package data",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LearningPackage"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Created new learning package",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LearningPackage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Mandatory fields are missing"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/api/package/{id}": {
            "get": {
                "summary": "Get a learning package by ID",
                "operationId": "getPackageById",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer",
                            "example": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A learning package",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LearningPackage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Learning package not found"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "put": {
                "summary": "Update a learning package",
                "operationId": "updateLearningPackage",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer",
                            "example": 1
                        }
                    }
                ],
                "requestBody": {
                    "description": "Learning package data to update",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LearningPackage"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Learning package updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LearningPackage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Learning package not found"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "delete": {
                "summary": "Delete a learning package",
                "operationId": "deleteLearningPackage",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer",
                            "example": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Learning package deleted successfully"
                    },
                    "404": {
                        "description": "Learning package not found"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/api/package-summaries": {
            "get": {
                "summary": "Get a list of package summaries",
                "operationId": "getPackageSummaries",
                "responses": {
                    "200": {
                        "description": "A list of package summaries",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/PackageSummary"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/api/package-summaries/search": {
            "get": {
                "summary": "Search learning packages",
                "operationId": "searchLearningPackages",
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "title",
                        "in": "query",
                        "description": "Package title",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "description": "Package category",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "difficulty",
                        "in": "query",
                        "description": "Package difficulty",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of matching learning packages",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/PackageSummary"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/api/package/{id}/fact": {
            "get": {
                "summary": "Get all facts for a learning package",
                "operationId": "getPackageFacts",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of facts for the learning package",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/LearningFact"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "post": {
                "summary": "Create a new fact for a learning package",
                "operationId": "createLearningFact",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Fact content to add",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LearningFact"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Fact created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LearningFact"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Fact content is required"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "put": {
                "summary": "Update a fact for a learning package",
                "operationId": "updateLearningFact",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "factId",
                        "in": "path",
                        "required": true,
                        "description": "Fact ID",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Updated fact content",
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LearningFact"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Fact updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/LearningFact"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Fact not found"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            },
            "delete": {
                "summary": '"Delete a fact from a learning package"',
                "operationId": "deleteLearningFact",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Learning package ID",
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "factId",
                        "in": "path",
                        "required": true,
                        "description": "Fact ID",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Fact deleted successfully"
                    },
                    "404": {
                        "description": "Fact not found"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "LearningPackage": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "example": 1
                    },
                    "title": {
                        "type": "string",
                        "example": "Intro to Programming"
                    },
                    "description": {
                        "type": "string",
                        "example": "A basic course to get started with programming."
                    },
                    "category": {
                        "type": "string",
                        "example": "Computer Science"
                    },
                    "difficulty": {
                        "type": "integer",
                        "example": 2
                    }
                }
            },
            "PackageSummary": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "example": 1
                    },
                    "title": {
                        "type": "string",
                        "example": "Intro to Programming"
                    },
                    "category": {
                        "type": "string",
                        "example": "Computer Science"
                    }
                }
            },
            "LearningFact": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "example": 1
                    },
                    "content": {
                        "type": "string",
                        "example": "This is a fact related to the learning package."
                    }
                }
            },
            "SwaggerJson": {
                "type": "object",
                "properties": {
                    "swagger": {
                        "type": "string",
                        "example": "2.0"
                    },
                    "info": {
                        "type": "object",
                        "properties": {
                            "title": {
                                "type": "string",
                                "example": "Learning Package API"
                            },
                            "version": {
                                "type": "string",
                                "example": "1.0.0"
                            },
                            "description": {
                                "type": "string",
                                "example": "API for managing learning packages and associated facts."
                            }
                        }
                    }
                }
            }
        }
    }
}

export default swaggerDoc;
