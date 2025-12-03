import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching:", query);
  };

  return (
    <TextField
      sx={{ borderRadius: 50, "& .MuiOutlinedInput-root": { borderRadius: 50 } }}
      variant="outlined"
      placeholder="Search"
      size="small"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch();
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}
