import SearchBar from "./ui/Searchbar";
import { Container } from "@mui/material";
import JobsList from "./ui/JobsList";


function Jobs() {
  return (
    <Container  sx={{paddingLeft:20, paddingRight:20}}>
            <SearchBar/>
            <JobsList/>
      </Container>
  )
}

export default Jobs