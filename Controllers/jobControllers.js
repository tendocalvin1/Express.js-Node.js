// Controllers contain the logic of the application aka these are the brains of the system

import { jobs } from '../Models/jobModel.js';
export const getJobs = (req, res)=>{
    res.json(jobs);

}

export const createJob = (req, res)=>{
    const newJob = req.body
    jobs.push(newJob);
    res.status(201).json(newJob)
}