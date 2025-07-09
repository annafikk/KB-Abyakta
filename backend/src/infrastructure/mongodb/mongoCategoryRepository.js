import { CategoryRepository } from '../../domain/category/categoryRepository.js';
import { model, Schema, Types } from "mongoose";

const CategorySchema = new Schema({
    name: String,
    slug: String,
    user: {
        type: Types.ObjectId,
        ref: 'User',
      }
}, { timestamps: true });

const CategoryModel = model('Category', CategorySchema);

export class MongoCategoryRepository extends CategoryRepository {
    async create(category) {
        const newCategory = await CategoryModel.create(category);
        return {
            id: newCategory._id,
            name: newCategory.name,
            slug: newCategory.slug,
        };
    }

    async update(id, category) {
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, category, { new: true });
        return {
            id: updatedCategory._id,
            name: updatedCategory.name,
            slug: updatedCategory.slug,
        };
    }

    async remove(id) {
        await CategoryModel.findByIdAndDelete(id);
    }

    async findAll() {
        const categories = await CategoryModel.find();
        return categories.map(cat => ({
            id: cat._id,
            name: cat.name,
            slug: cat.slug,
        }));
    }

    async findById(id) {
        const category = await CategoryModel.findById(id);
        if (!category) return null;
        return {
            id: category._id,
            name: category.name,
            slug: category.slug,
        };
    }
}
