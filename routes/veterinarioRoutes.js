import express from "express";

import {
  perfil,
  registrar,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/vetrinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/reset-password", olvidePassword);
router.route("/reset-password/:token").get(comprobarToken).post(nuevoPassword);

//area privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
