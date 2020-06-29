const express = require('express');
const router = express.Router();

const Projects = require('./model-projects')

router.get('/projects', async (req,res) => {
    await Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving the projects' })
        })
})

router.get('/resources', async (req,res) => {
    await Projects.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'There was an error retrieving the resources'
            })
        })
})

router.get('/projects/:id/tasks', async (req,res) => {
    await Projects.getTasks(req.params.id)
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'There was an error retrie'
            })
        })
})

router.post('/projects', async (req,res) => {
    await Projects.addProject(req.body)
        .then(project_id => {
            res.json({
                message: `Successfully created project of id ${project_id}`
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'There was an error adding the project'
            })
        })
})

router.post('/resources', async (req,res) => {
    await Projects.addResource(req.body)
        .then(resource_id => {
            res.json({
                message: `Successfully created resource of id ${resource_id}`
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'There was an error creating the resource'
            })
        })
})

router.post('/projects/:id/tasks', async (req,res) => {
    await Projects.addTask(req.body, req.params.id)
        .then(task_id => {
            res.json({
                message: `Successfully created the task of id ${task_id}`
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'There was an error creating the task'
            })
        })
})

module.exports = router