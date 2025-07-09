export class DeleteCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(id) {
        return await this.categoryRepository.delete(id);
    }
}