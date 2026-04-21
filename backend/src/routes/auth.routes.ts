/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   auth.routes.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/04/21 14:09:46 by tissad            #+#    #+#             */
/*   Updated: 2026/04/21 14:19:31 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Router } from "express";
import * as authController from "../controller/auth.controller.js";

const router = Router();

router.get("/42", authController.redirectTo42);
router.get("/42/callback", authController.handle42Callback);

export default router;