import connectDB from '../DB/connection.js';
import categoriesRouter from './modules/category/category.router.js';
import subCategoriesRouter from './modules/subCategory/subCategory.router.js';
import productRouter from './modules/product/product.router.js';
import authRouter from './modules/auth/auth.router.js';
import cartRouter from './modules/cart/cart.router.js';
import cors from 'cors';

const initApp = (app, express) => {
    connectDB()
    app.use(cors())
    app.use(express.json());
    app.get('/', (req, res) => {
        return res.status(200).json({ message: "Success" })
    })
    app.use('/categories', categoriesRouter);
    app.use('/subCategories', subCategoriesRouter);
    app.use('/auth', authRouter)
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
    app.use('*', (req, res) => {
        return res.status(404).json({ message: "page not found" });
    })
}
export default initApp;