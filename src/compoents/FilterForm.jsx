import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";

const FilterForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 3,
        p: 3,
        borderRadius: 2,
        width: "100%",
        height: "fit-content",
      }}
    >
      {/* Responsive Grid: Changes to Flex Column below 788px */}
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "column", md: "unset" },
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
          gap: 2,
          mb: 2,
        }}
      >
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

      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "column", md: "unset" },
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
          gap: 2,
          mb: 2,
        }}
      >
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

      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "column", md: "unset" },
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
          gap: 2,
          mb: 2,
        }}
      >
        <FormControl fullWidth>
          <InputLabel>Completed</InputLabel>
          <Select>
            <MenuItem value="">No selection</MenuItem>
            <MenuItem value="Completed Service">Completed Service</MenuItem>
            <MenuItem value="Canceled Service">Canceled Service</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Buttons Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <button className="px-5 py-3 text-[#173968] border-[#173968] border rounded-md text-sm">
          ➕ Create New Service
        </button>
        <Button variant="contained" color="warning">Seek</Button>
      </Box>
    </Box>
  );
};

export default FilterForm;
