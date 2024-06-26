import { Router } from 'express';
import * as controller from './auth.controller.js'
import fileUpload, { fileType } from '../../utls/multer.js';
import { auth } from '../../middleware/auth.middleware.js';
const router = Router();

router.post('/register', controller.register);
router.post('/login',controller.login);
router.patch('/sendCode',controller.sendCode);
router.patch('/forgotPassword',controller.forgotPassword);

// router.get('/active',controller.getActive);
// router.get('/:id',controller.getDetails);
// router.patch('/:id',fileUpload(fileType.image).single('image'),controller.update);
// router.delete('/:id',controller.destroy)
export default router;
