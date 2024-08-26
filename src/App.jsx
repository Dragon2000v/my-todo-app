import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api/api';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  TextField,
  Box,
} from '@mui/material';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskData, setEditTaskData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      await createTask(newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    const { _id, createdAt, updatedAt, __v, ...taskData } = updatedTask;

    try {
      await updateTask(id, taskData);
      setEditingTaskId(null); // Exit editing mode after saving
      fetchTasks();
    } catch (error) {
      console.error(
        'Error updating task:',
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDeleteTask = async id => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditingTask = task => {
    setEditingTaskId(task._id);
    setEditTaskData({ title: task.title, description: task.description });
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditTaskData({ title: '', description: '' });
  };

  const handleSaveTask = id => {
    handleUpdateTask(id, { ...editTaskData });
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleCreateTask={handleCreateTask}
      />
      <Box>
        {tasks.map(task => (
          <Card key={task._id} sx={{ mb: 2 }}>
            <CardContent>
              {editingTaskId === task._id ? (
                <>
                  <TextField
                    label="Title"
                    value={editTaskData.title}
                    onChange={e =>
                      setEditTaskData({
                        ...editTaskData,
                        title: e.target.value,
                      })
                    }
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Description"
                    value={editTaskData.description}
                    onChange={e =>
                      setEditTaskData({
                        ...editTaskData,
                        description: e.target.value,
                      })
                    }
                    fullWidth
                    margin="normal"
                  />
                </>
              ) : (
                <>
                  <Typography variant="h5" component="div">
                    {task.title}
                  </Typography>
                  <Typography variant="body2">{task.description}</Typography>
                </>
              )}
              <Box sx={{ mt: 2 }}>
                {editingTaskId === task._id ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSaveTask(task._id)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={cancelEditing}
                      sx={{ ml: 1 }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color={task.isCompleted ? 'secondary' : 'primary'}
                      onClick={() =>
                        handleUpdateTask(task._id, {
                          ...task,
                          isCompleted: !task.isCompleted,
                        })
                      }
                    >
                      {task.isCompleted
                        ? 'Mark as Incomplete'
                        : 'Mark as Completed'}
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      onClick={() => startEditingTask(task)}
                      sx={{ ml: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteTask(task._id)}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default App;
