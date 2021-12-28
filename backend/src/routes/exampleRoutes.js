import { Router } from 'express';

import {
	getAllMODEL_NAMEs,
	createMODEL_NAME,
	getMODEL_NAMEById,
	deleteMODEL_NAME,
} from '../controllers/exampleController.js';

const router = Router();

router.route('/').get(getAllMODEL_NAMEs).post(createMODEL_NAME);
router.route('/:id').get(getMODEL_NAMEById).delete(deleteMODEL_NAME);

export default router;
