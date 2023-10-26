import { Router } from 'express';
import { Category } from '../models/Category';

const router = Router();

const categories: Category[] = [];

router.get('/category', (req, res, next) => {
    res.status(200).json({ category: categories});
});

router.post('/category', (req, res, next) => {
    const newCategory: Category = {
        id: 1234,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json({ message: "New category was created", newCategory: newCategory });
});

router.put('/category/:categoryId', (req, res, next) => {
    const categoryIndex = categories.findIndex(category => category.id === req.params.categoryId);
    if (categoryIndex >= 0) {
        categories[categoryIndex] = { id: 12, name: req.body.name };
        return res.status(200).json({ message: "", categories: categories });
    }
    res.status(404).json({ message: "Could not find a category" });
});

router.delete('/category/:categoryId', (req, res, next) => {
    const categoryIndex = categories.findIndex(category => category.id === req.params.categoryId);
    if (categoryIndex > -1) {
        categories.splice(categoryIndex, 1);
        return res.status(200).json({ message: "Our category was deleted" });
    }
    res.status(404).json({ message: "Couldn't find a category" });
});

export default router;
