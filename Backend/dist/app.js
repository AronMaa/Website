"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import {learningPackages} from "./listLearningPackage"; not used anymore
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDoc_1 = __importDefault(require("./swaggerDoc"));
const sequelizeConfig_1 = __importDefault(require("./sequelizeConfig")); // Import the configured Sequelize instance
const learningPackage_1 = require("./learningPackage");
const model_1 = require("./model");
const learningFact_1 = require("./learningFact");
const swaggerOptions = {
    definition: swaggerDoc_1.default,
    apis: ['./src/*.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
const app = (0, express_1.default)();
const PORT = 3000;
const cors = require('cors');
app.use(express_1.default.json());
app.use('/swagger-ui', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs, {
    customCss: '.swagger-ui .topbar { background-color: #333; }'
}));
app.use(cors({ origin: 'http://localhost:4200' }));
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDoc_1.default);
});
app.get('/api/liveness', (req, res) => {
    res.status(200).send('OK');
});
app.get('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const learningPackages = yield learningPackage_1.LearningPackage.findAll();
        res.status(200).json(learningPackages);
    }
    catch (error) {
        console.error('Error fetching learning packages:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/package/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const pkg = yield learningPackage_1.LearningPackage.findOne({ where: { id } });
        if (pkg) {
            res.status(200).json(pkg);
        }
        else {
            res.status(404).send(`Entity not found for id: ${id}`);
        }
    }
    catch (error) {
        console.error('Error fetching package:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/package-summaries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield learningPackage_1.LearningPackage.findAll({ attributes: ['id', 'title'] });
        res.status(200).json(packages);
    }
    catch (error) {
        console.error('Error fetching package summaries:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/package-summaries/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, category, difficulty } = req.query;
    try {
        const filters = {};
        // Apply basic filters directly without Op
        if (id)
            filters.id = parseInt(id, 10);
        if (title)
            filters.title = { $like: `%${title}%` }; // Using raw SQL operator for like
        if (category)
            filters.category = { $like: `%${category}%` }; // Using raw SQL operator for like
        if (difficulty)
            filters.difficulty = parseInt(difficulty, 10);
        // Use raw SQL conditions
        const packages = yield learningPackage_1.LearningPackage.findAll({
            where: filters,
            attributes: ['id', 'title'],
        });
        res.status(200).json(packages);
    }
    catch (error) {
        console.error('Error searching packages:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const learningPackages = yield learningPackage_1.LearningPackage.findAll({
            attributes: ['id', 'title', 'description', 'category', 'targetAudience', 'difficulty', 'created_at', 'updated_at'],
        });
        res.json(learningPackages);
    }
    catch (error) {
        console.error('Error fetching learning packages:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const learningPackage = yield learningPackage_1.LearningPackage.findByPk(id);
    res.json(learningPackage);
}));
// @ts-ignore
app.post('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, category, targetAudience, difficulty } = req.body;
    if (!title || !category || !difficulty) {
        return res.status(400).send('Mandatory fields are missing (title, category or difficulty).');
    }
    try {
        const newPackage = yield learningPackage_1.LearningPackage.create({
            title,
            description,
            category,
            targetAudience,
            difficulty
        });
        res.status(201).json(newPackage);
    }
    catch (error) {
        console.error('Error creating new package:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.post('/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, category, targetAudience, difficulty } = req.body;
        const learningPackage = yield learningPackage_1.LearningPackage.create({
            title,
            description, // This field will be used
            category,
            targetAudience, // This field will be used
            difficulty,
        });
        res.status(201).json(learningPackage);
    }
    catch (error) {
        console.error('Error creating learning package:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.put('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, description, category, targetAudience, difficulty } = req.body;
    try {
        const pkg = yield learningPackage_1.LearningPackage.findByPk(id);
        if (pkg) {
            pkg.title = title;
            pkg.description = description;
            pkg.category = category;
            pkg.targetAudience = targetAudience;
            pkg.difficulty = difficulty;
            yield pkg.save();
            res.status(200).json(pkg);
        }
        else {
            res.status(404).send(`LearningPackage with id ${id} not found.`);
        }
    }
    catch (error) {
        console.error('Error updating learning package:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packageId = parseInt(req.params.id, 10);
    try {
        const facts = yield learningFact_1.LearningFact.findAll({
            where: { learningPackageId: packageId }, // Filter by the learningPackageId
            attributes: ['id', 'fact', 'created_at', 'updated_at']
        });
        res.status(200).json(facts);
    }
    catch (error) {
        console.error('Error fetching facts:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// @ts-ignore
app.post('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packageId = parseInt(req.params.id, 10);
    const { fact } = req.body;
    if (!fact) {
        return res.status(400).send('Fact content is required.');
    }
    try {
        const newFact = yield learningFact_1.LearningFact.create({
            fact,
            learningPackageId: packageId // Associate the fact with the given LearningPackage
        });
        res.status(201).json(newFact);
    }
    catch (error) {
        console.error('Error creating fact:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// @ts-ignore
app.put('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packageId = parseInt(req.params.id, 10);
    const { factId, fact } = req.body;
    if (!factId || !fact) {
        return res.status(400).send('Fact ID and content are required.');
    }
    try {
        const factToUpdate = yield learningFact_1.LearningFact.findOne({
            where: { id: factId, learningPackageId: packageId }
        });
        if (!factToUpdate) {
            return res.status(404).send('Fact not found.');
        }
        factToUpdate.fact = fact; // Update the fact
        yield factToUpdate.save(); // Save the updated fact
        res.status(200).json(factToUpdate);
    }
    catch (error) {
        console.error('Error updating fact:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// @ts-ignore
app.delete('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packageId = parseInt(req.params.id, 10);
    const { factId } = req.body;
    if (!factId) {
        return res.status(400).send('Fact ID is required.');
    }
    try {
        const factToDelete = yield learningFact_1.LearningFact.findOne({
            where: { id: factId, learningPackageId: packageId }
        });
        if (!factToDelete) {
            return res.status(404).send('Fact not found.');
        }
        factToDelete.disabled = true; // Mark the fact as disabled instead of deleting
        yield factToDelete.save();
        res.status(200).json(factToDelete);
    }
    catch (error) {
        console.error('Error disabling fact:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// Get all LearningPackages
app.get('/api/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield learningPackage_1.LearningPackage.findAll();
        res.json(packages);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch learning packages' });
    }
}));
// Get a single LearningPackage by ID
// @ts-ignore
app.get('/api/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pck = yield learningPackage_1.LearningPackage.findByPk(id);
        if (!pck)
            return res.status(404).json({ error: 'Learning package not found' });
        res.json(pck);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch learning package' });
    }
}));
// Create a new LearningPackage
app.post('/api/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPackage = yield learningPackage_1.LearningPackage.create(req.body);
        res.status(201).json(newPackage);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create learning package' });
    }
}));
// Update a LearningPackage
// @ts-ignore
app.put('/api/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const [updated] = yield learningPackage_1.LearningPackage.update(req.body, { where: { id } });
        if (!updated)
            return res.status(404).json({ error: 'Learning package not found' });
        res.json({ message: 'Learning package updated successfully' });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update learning package' });
    }
}));
// Delete a LearningPackage
// @ts-ignore
app.delete('/api/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield learningPackage_1.LearningPackage.destroy({ where: { id } });
        if (!deleted)
            return res.status(404).json({ error: 'Learning package not found' });
        res.json({ message: 'Learning package deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete learning package' });
    }
}));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelizeConfig_1.default.authenticate();
            console.log('Connection to the database has been established successfully.');
            yield sequelizeConfig_1.default.sync({ alter: true });
            console.log('Database synchronized successfully.');
            yield learningPackage_1.LearningPackage.create(model_1.LEARN_TYPE_SCRIPT, { validate: true });
            yield learningPackage_1.LearningPackage.create(model_1.LEARN_ANGULAR, { validate: true });
            yield learningPackage_1.LearningPackage.create(model_1.LEARN_HTML, { validate: true });
            yield learningPackage_1.LearningPackage.create(model_1.LEARN_NODE_JS, { validate: true });
            console.log('Rows successfully added to LearningPackage.');
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            process.exit(1);
        }
    });
}
startServer().then(() => { });
