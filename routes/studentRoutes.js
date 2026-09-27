const express = require('express');
const router = express.Router();
const { students } = require('../data/students');
let nextId = 4;

router.get('/', (req, res) => {
  res.status(200).json(students);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json(student);
});

router.post('/', (req, res) => {
  const { name, age, grade } = req.body;
  if (!name || !age || !grade) {
    return res.status(400).json({ message: 'Name, age, and grade are required' });
  }
  const newStudent = {
    id: nextId++,
    name,
    age: parseInt(age),
    grade
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  const { name, age, grade } = req.body;
  if (!name || !age || !grade) {
    return res.status(400).json({ message: 'Name, age, and grade are required' });
  }
  student.name = name;
  student.age = parseInt(age);
  student.grade = grade;
  res.status(200).json(student);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  students.splice(index, 1);
  res.status(200).json({ message: 'Student deleted successfully' });
});

module.exports = router;