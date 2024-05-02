import express from "express"
import verytoken from "../controllers/verytoken-controller";
import validateToken from "../middleware/validateToken";

const router = express.Router();

router.get('/', validateToken, verytoken);

export default router;