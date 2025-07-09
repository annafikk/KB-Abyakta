import { MongoCategoryRepository } from '../../../infrastructure/mongodb/mongoCategoryRepository.js';
import { GetAllCategory } from '../../../usecases/category/getAllCategory.js';
import { GetCategory } from '../../../usecases/category/getCategory.js';
import { CreateCategory } from '../../../usecases/category/createCategory.js';
import { UpdateCategory } from '../../../usecases/category/updateCategory.js';
import { DeleteCategory } from '../../../usecases/category/deleteCategory.js';

const categoryRepo = new MongoCategoryRepository();
const createCategory = new CreateCategory(categoryRepo);

const getAllCategory = (req, res, next) => {
  const handler = new GetAllCategory(categoryRepo);
  return handler.handle(req, res, next);
};

const getCategory = (req, res, next) => {
  const handler = new GetCategory(categoryRepo);
  return handler.handle(req, res, next);
};
const createCategoryController = async (req, res, next) => {
    try {
        const result = await createCategory.execute({ name: req.body.name });
        return res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};
const updateCategory = (req, res, next) => {
  const handler = new UpdateCategory(categoryRepo);
  return handler.handle(req, res, next);
};

const deleteCategory = (req, res, next) => {
  const handler = new DeleteCategory(categoryRepo);
  return handler.handle(req, res, next);
};

export { getAllCategory, getCategory, createCategoryController, updateCategory, deleteCategory };
