import express from 'express';
const router = express.Router();

import { getAllMovies, addFavMovie, deleteFavMovie } from '../Models/models.js';

//GET all favourite movies
router.get('/', async (req, res) => {
  const data = await getAllMovies();
  res.json({ success: true, payload: data });
});

//POST new favourite movie
router.post('/', async (req, res) => {
  const data = await addFavMovie(req.body);
  res.json({ success: true, payload: data });
});

//DELETE favourite movie
router.delete('/:id', async (req, res) => {
  const data = await deleteFavMovie(req.params.id);
  res.json({ success: true, payload: data });
});

export default router;
