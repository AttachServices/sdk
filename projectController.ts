import { Request, Response } from "express";
import { verifyToken } from "../services/verifier";
import { trackToken } from "../services/tracker";
import { analyzeRisk } from "../services/riskEngine";

export const verifyProject = async (req: Request, res: Response) => {
  const token = req.params.token;

  const verification = verifyToken(token);
  const risk = analyzeRisk(token);

  res.json({
    token,
    verification,
    risk
  });
};

export const trackProject = async (req: Request, res: Response) => {
  const token = req.params.token;

  const trackingData = trackToken(token);

  res.json({
    token,
    trackingData
  });
};
