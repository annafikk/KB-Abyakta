export class GetCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute({ id }) {
        const category = await this.categoryRepository.findById(id);

        if (!category) {
            throw new Error('Category not found');
        }

        return {
            id: category.id,
            name: category.name,
            slug: category.slug
        };
    }

    async handle(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.execute({ id });
            return res.status(200).json(result);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
