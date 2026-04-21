/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   auth.controller.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/04/21 14:10:56 by tissad            #+#    #+#             */
/*   Updated: 2026/04/21 14:18:26 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import type { Request, Response } from "express";
import * as authService from "../services/auth.service.js";

export const redirectTo42 = (req: Request, res: Response) => {
  const url = authService.get42AuthUrl();
  res.redirect(url);
};

export const handle42Callback = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  try {
    const token = await authService.handleOAuth(code);

    // redirection vers le front
    res.redirect(`http://localhost:5173?token=${token}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("OAuth failed");
  }
};