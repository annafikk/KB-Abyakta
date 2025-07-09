import slugify from "slugify";

export class UpdateCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async handle(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            if (!name || typeof name !== 'string') {
                return res.status(400).json({ message: 'Name is required and must be a string.' });
            }
    
            // Generate slug from name
            const slug = slugify(name, {
                lower: true,   
                strict: true   
            });
    
            const category = await this.categoryRepository.update(id, { name, slug });
            return res.status(201).json(category);
        } catch (err) {
            next(err);
        }   
    }
}