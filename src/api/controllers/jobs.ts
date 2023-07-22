import { Request, Response, response } from "express"
import JobService from "../../services/job"
import LocalDatabase from "../../db/local.db"
import Job from "../../models/job";

class JobController {
  service: JobService
 
  constructor(){
    this.service = new JobService(new LocalDatabase());
  }
  
  createJob(req: Request, res: Response) {
    const job: Job = req.body;

    this.service.createJob(job.name, job.description);

    res.send(job);
  }


  getJob(req: Request, res: Response){
    const id = +req.params.jobId;
    const job = this.service.getJob(id);

    res.send(job)
  }

  getAllJobs(req: Request, res: Response){
    const jobs = this.service.getJobs();

    res.send(jobs);
  }


  updateJob(req: Request, res: Response){
    const id = +req.params.jobId;
    const body: Job = req.body;

    const job = this.service.updateJob(id, body.name, body.description);

    res.send(job)
  }

  deleteJob(req: Request, res: Response){
    const id = +req.params.jobId;
    const jobs = this.service.deleteJob(id);

    res.send("Successfully Deleted")
  }

}

export default JobController;

