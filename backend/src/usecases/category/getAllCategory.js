export class GetAllCategory {
    constructor(categoryRepository) {
      this.categoryRepository = categoryRepository;
    }
  
    async execute() {
      const categories = await this.categoryRepository.findAll();
      return categories.map(cat => ({
        id: cat._id,
        name: cat.name,
        slug: cat.slug
      }));
    }
  
    handle = async (req, res, next) => {
      try {
        const result = await this.execute();
        res.status(200).json(result);
      } catch (error) {
        console.error('GetAllCategory error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    };
  }
  