import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/lab";

const FilterForm = () => {
  return (
    <Box sx={{ backgroundColor: "white", boxShadow: 3, p: 3, borderRadius: 2, width: "100%" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mb: 2 }}>
        <TextField label="Start of Service" type="date" InputLabelProps={{ shrink: true }} fullWidth />
        <TextField label="Service" type="date" InputLabelProps={{ shrink: true }} fullWidth />
        <FormControl fullWidth>
          <InputLabel>Federal State</InputLabel>
          <Select>
            <MenuItem value="Berlin">Berlin</MenuItem>
            <MenuItem value="Paris">Paris</MenuItem>
            <MenuItem value="London">London</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Service Type</InputLabel>
          <Select>
            <MenuItem value="Driving and Seating Service">Driving and Seating Service</MenuItem>
            <MenuItem value="Transportation">Transportation</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Assigned</InputLabel>
          <Select>
            <MenuItem value="">No selection</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Published</InputLabel>
          <Select>
            <MenuItem value="">No selection</MenuItem>
            <MenuItem value="Published Service">Published Service</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Completed</InputLabel>
          <Select>
            <MenuItem value="">No selection</MenuItem>
            <MenuItem value="Completed Service">Completed Service</MenuItem>
            <MenuItem value="Canceled Service">Canceled Service</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" color="primary">➕ Create New Service</Button>
        <Button variant="contained" color="warning">Seek</Button>
      </Box>
    </Box>
  );
};

export default FilterForm;
