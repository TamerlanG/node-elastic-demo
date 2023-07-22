import express from 'express';
import JobController from './controllers/jobs';

const router = express.Router();
const jobController = new JobController();

router.get("/jobs/:jobId", jobController.getJob.bind(jobController));

router.get("/jobs", jobController.getAllJobs.bind(jobController));

router.post("/jobs", jobController.createJob.bind(jobController));

router.put("/jobs/:jobId", jobController.updateJob.bind(jobController));

router.delete("/jobs/:jobId", jobController.deleteJob.bind(jobController));


export default router;
