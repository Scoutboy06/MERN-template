// TODO: Change MODEL_NAME to the model's name

import asyncHandler from 'express-async-handler';
// import axios from 'axios';

import MODEL_NAME from '../models/exampleModel.js';

// @desc		Get all MODEL_NAMEs
// @route		GET /api/MODEL_NAME?keyword=name
// @access
const getAllMODEL_NAMEs = asyncHandler(async (req, res) => {
	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {};

	const models = await MODEL_NAME.find({ ...keyword });

	res.json(models);
});

// @desc		Create a new MODEL_NAME
// @route		GET /api/MODEL_NAME
// @access
const createMODEL_NAME = asyncHandler(async (req, res) => {
	const {} = req.body;

	const newMODEL_NAME = new MODEL_NAME({});

	const createdMODEL_NAME = await newMODEL_NAME.save();
	res.status(201).json(createdMODEL_NAME);
});

// @desc		Get MODEL_NAME by their id
// @route		GET /api/MODEL_NAME/:id
// @access
const getMODEL_NAMEById = asyncHandler(async (req, res) => {
	const { id } = req.headers;

	const model = await MODEL_NAME.findOne({ _id: id });

	if (!model) {
		res.status(404);
		throw new Error('MODE_NAME not found');
	}

	res.json(model);
});

// @desc		Delete MODEL_NAME by their id
// @route		DELETE /api/MODEL_NAME/:id
// @access
const deleteMODEL_NAME = asyncHandler(async (req, res) => {
	const { id } = req.headers;

	const model = await MODEL_NAME.findOne({ _id: id });

	if (!model) {
		res.status(404);
		throw new Error('MODEL_NAME not found');
	}

	await model.remove();
	res.json({ message: 'MODEL_NAME was sucessfully removed' });
});

export {
	getAllMODEL_NAMEs,
	createMODEL_NAME,
	getMODEL_NAMEById,
	deleteMODEL_NAME,
};
