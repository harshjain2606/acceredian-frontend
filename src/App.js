import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

const schema = yup.object().shape({
  referrerName: yup.string().required('Referrer name is required'),
  referrerEmail: yup.string().email('Invalid email').required('Referrer email is required'),
  refereeName: yup.string().required('Referee name is required'),
  refereeEmail: yup.string().email('Invalid email').required('Referee email is required'),
});

function App() {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" className="hero-section">
      <Typography variant="h3" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Refer a course to your friends and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Refer Now
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="modal-box">
          <Typography variant="h6" component="h2" gutterBottom>
            Refer a Course
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="referrerName"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Referrer Name" fullWidth margin="normal" error={!!errors.referrerName} helperText={errors.referrerName?.message} />
              )}
            />
            <Controller
              name="referrerEmail"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Referrer Email" fullWidth margin="normal" error={!!errors.referrerEmail} helperText={errors.referrerEmail?.message} />
              )}
            />
            <Controller
              name="refereeName"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Referee Name" fullWidth margin="normal" error={!!errors.refereeName} helperText={errors.refereeName?.message} />
              )}
            />
            <Controller
              name="refereeEmail"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Referee Email" fullWidth margin="normal" error={!!errors.refereeEmail} helperText={errors.refereeEmail?.message} />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
