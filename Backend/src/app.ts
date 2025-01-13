import express, { Request, Response } from 'express';
//import {learningPackages} from "./listLearningPackage"; not used anymore
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swaggerDoc';
import sequelize from './sequelizeConfig'; // Import the configured Sequelize instance
import {LearningPackage} from './learningPackage';
import {LEARN_TYPE_SCRIPT, LEARN_NODE_JS, LEARN_HTML, LEARN_ANGULAR} from "./model";
import {LearningFact} from "./learningFact";


const swaggerOptions = {
    definition: swaggerDoc,
    apis: ['./src/*.ts'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs,{
    customCss: '.swagger-ui .topbar { background-color: #333; }'
}));
app.use(cors({origin: 'http://localhost:4200'}));

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDoc);
});
app.get('/api/liveness', (req: Request, res: Response) => {
    res.status(200).send('OK');
});
app.get('/api/package', async (req: Request, res: Response) => {
    try {
        const learningPackages = await LearningPackage.findAll();
        res.status(200).json(learningPackages);
    } catch (error) {
        console.error('Error fetching learning packages:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/package/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
        const pkg = await LearningPackage.findOne({ where: { id } });
        if (pkg) {
            res.status(200).json(pkg);
        } else {
            res.status(404).send(`Entity not found for id: ${id}`);
        }
    } catch (error) {
        console.error('Error fetching package:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/package-summaries', async (req: Request, res: Response) => {
    try {
        const packages = await LearningPackage.findAll({ attributes: ['id', 'title'] });
        res.status(200).json(packages);
    } catch (error) {
        console.error('Error fetching package summaries:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/package-summaries/search', async (req: Request, res: Response) => {
    const { id, title, category, difficulty } = req.query;
    try {
        const filters: any = {};

        // Apply basic filters directly without Op
        if (id) filters.id = parseInt(id as string, 10);
        if (title) filters.title = { $like: `%${title}%` }; // Using raw SQL operator for like
        if (category) filters.category = { $like: `%${category}%` }; // Using raw SQL operator for like
        if (difficulty) filters.difficulty = parseInt(difficulty as string, 10);

        // Use raw SQL conditions
        const packages = await LearningPackage.findAll({
            where: filters,
            attributes: ['id', 'title'],
        });

        res.status(200).json(packages);
    } catch (error) {
        console.error('Error searching packages:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/learning-packages', async (req: Request, res: Response) => {
    try {
        const learningPackages = await LearningPackage.findAll({
            attributes: ['id', 'title', 'description', 'category', 'targetAudience', 'difficulty', 'created_at', 'updated_at'],
        });
        res.json(learningPackages);
    } catch (error) {
        console.error('Error fetching learning packages:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/learning-packages/:id', async (req, res) => {
    const id = req.params.id;
    const learningPackage = await LearningPackage.findByPk(id);
    res.json(learningPackage);
});

// @ts-ignore
app.post('/api/package', async (req: Request, res: Response) => {
    const { title, description, category, targetAudience, difficulty } = req.body;
    if (!title || !category || !difficulty) {
        return res.status(400).send('Mandatory fields are missing (title, category or difficulty).');
    }
    try {
        const newPackage = await LearningPackage.create({
            title,
            description,
            category,
            targetAudience,
            difficulty
        });
        res.status(201).json(newPackage);
    } catch (error) {
        console.error('Error creating new package:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/learning-packages', async (req: Request, res: Response) => {
    try {
        const { title, description, category, targetAudience, difficulty } = req.body;
        const learningPackage = await LearningPackage.create({
            title,
            description, // This field will be used
            category,
            targetAudience, // This field will be used
            difficulty,
        });
        res.status(201).json(learningPackage);
    } catch (error) {
        console.error('Error creating learning package:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/api/package', async (req: Request, res: Response) => {
    const { id, title, description, category, targetAudience, difficulty } = req.body;
    try {
        const pkg = await LearningPackage.findByPk(id);
        if (pkg) {
            pkg.title = title;
            pkg.description = description;
            pkg.category = category;
            pkg.targetAudience = targetAudience;
            pkg.difficulty = difficulty;
            await pkg.save();
            res.status(200).json(pkg);
        } else {
            res.status(404).send(`LearningPackage with id ${id} not found.`);
        }
    } catch (error) {
        console.error('Error updating learning package:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id, 10);
    try {
        const facts = await LearningFact.findAll({
            where: { learningPackageId: packageId }, // Filter by the learningPackageId
            attributes: ['id', 'fact', 'created_at', 'updated_at']
        });
        res.status(200).json(facts);
    } catch (error) {
        console.error('Error fetching facts:', error);
        res.status(500).send('Internal Server Error');
    }
});
// @ts-ignore
app.post('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id, 10);
    const { fact } = req.body;
    if (!fact) {
        return res.status(400).send('Fact content is required.');
    }
    try {
        const newFact = await LearningFact.create({
            fact,
            learningPackageId: packageId // Associate the fact with the given LearningPackage
        });
        res.status(201).json(newFact);
    } catch (error) {
        console.error('Error creating fact:', error);
        res.status(500).send('Internal Server Error');
    }
});
// @ts-ignore
app.put('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id, 10);
    const { factId, fact } = req.body;
    if (!factId || !fact) {
        return res.status(400).send('Fact ID and content are required.');
    }
    try {
        const factToUpdate = await LearningFact.findOne({
            where: { id: factId, learningPackageId: packageId }
        });
        if (!factToUpdate) {
            return res.status(404).send('Fact not found.');
        }
        factToUpdate.fact = fact; // Update the fact
        await factToUpdate.save(); // Save the updated fact
        res.status(200).json(factToUpdate);
    } catch (error) {
        console.error('Error updating fact:', error);
        res.status(500).send('Internal Server Error');
    }
});
// @ts-ignore
app.delete('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id, 10);
    const { factId } = req.body;
    if (!factId) {
        return res.status(400).send('Fact ID is required.');
    }
    try {
        const factToDelete = await LearningFact.findOne({
            where: { id: factId, learningPackageId: packageId }
        });
        if (!factToDelete) {
            return res.status(404).send('Fact not found.');
        }
        factToDelete.disabled = true; // Mark the fact as disabled instead of deleting
        await factToDelete.save();
        res.status(200).json(factToDelete);
    } catch (error) {
        console.error('Error disabling fact:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Get all LearningPackages
app.get('/api/learning-packages', async (req, res) => {
    try {
        const packages = await LearningPackage.findAll();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch learning packages' });
    }
});
// Get a single LearningPackage by ID
// @ts-ignore
app.get('/api/learning-packages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pck = await LearningPackage.findByPk(id);
        if (!pck) return res.status(404).json({ error: 'Learning package not found' });
        res.json(pck);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch learning package' });
    }
});
// Create a new LearningPackage
app.post('/api/learning-packages', async (req, res) => {
    try {
        const newPackage = await LearningPackage.create(req.body);
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create learning package' });
    }
});
// Update a LearningPackage
// @ts-ignore
app.put('/api/learning-packages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await LearningPackage.update(req.body, { where: { id } });
        if (!updated) return res.status(404).json({ error: 'Learning package not found' });
        res.json({ message: 'Learning package updated successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to update learning package' });
    }
});
// Delete a LearningPackage
// @ts-ignore
app.delete('/api/learning-packages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await LearningPackage.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ error: 'Learning package not found' });
        res.json({ message: 'Learning package deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete learning package' });
    }
});

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');

        await LearningPackage.create(LEARN_TYPE_SCRIPT, {validate: true});
        await LearningPackage.create(LEARN_ANGULAR, {validate: true});
        await LearningPackage.create(LEARN_HTML, {validate: true});
        await LearningPackage.create(LEARN_NODE_JS, {validate: true});
        console.log('Rows successfully added to LearningPackage.');

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

startServer().then(() => {});