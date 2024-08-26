import { Button, TextField, Box } from '@mui/material';

const TaskForm = ({ newTask, setNewTask, handleCreateTask }) => {
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Task Title"
        variant="outlined"
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, title: e.target.value })}
      />
      <TextField
        label="Task Description"
        variant="outlined"
        value={newTask.description}
        onChange={e => setNewTask({ ...newTask, description: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleCreateTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
