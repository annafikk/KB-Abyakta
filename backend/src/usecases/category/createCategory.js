// usecase/category/CreateCategory.js
import slugify from 'slugify';
import { Category } from '../../domain/category/Category.js';

export class CreateCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute({ name }) {
        if (!name || typeof name !== 'string') {
            throw new Error('Name is required and must be a string.');
        }

        const slug = slugify(name, { lower: true, strict: true });
        const category = new Category({ name, slug });

        const result = await this.categoryRepository.create(category);
        return result;
    }
}
