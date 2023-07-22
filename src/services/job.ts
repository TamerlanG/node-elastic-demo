import { DataObject, Database } from "../db/interface";
import Job from "../models/job";

export default class JobService {
  database: Database;
  table = "jobs";

  constructor(database: Database) {
    this.database = database;
  }


  getJob(id: number): DataObject {
    return this.database.get(this.table, id);
  }

  createJob(name: string, description: string){
    this.database.add(this.table, {name, description});
  }

  
  updateJob(id: number, name: string, description:string): DataObject {
    return this.database.update(this.table, id, {name, description});
  }

  getJobs(): DataObject[] {
    const data: DataObject[] = this.database.getAll(this.table);
    
    return data;
  }

  deleteJob(id: number): void {
    this.database.delete(this.table, id);
  }
}
