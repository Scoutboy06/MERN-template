import mongoose from 'mongoose';

const MODEL_NAME = mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: false,
	}
);

const Model = mongoose.model('MODEL_NAME', MODEL_NAME);

export default Model;
