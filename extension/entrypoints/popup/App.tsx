import './App.css';
import Button from "@mui/material/Button";
import { Container } from '@mui/material';
import LongMenu from '@/components/ui/PopupMenu.tsx';
import EmptyStateNotLinkedIn from '@/components/ui/EmptyStateNotLinkedIn';
import DonutChart from '@/components/ui/DonutChart';


export default function App() {
  console.log(window.location.href);

  return (
    <div className='app'>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}>
        <LongMenu />
      </Container>
      <Container sx={{ height: "fit-content" }}>
        {/* <EmptyStateNotLinkedIn/> */}
        <h3>Fit score</h3>
        <DonutChart overallFitScore={60} />
      </Container>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 8
        }}>
        <Button variant="outlined">Analyze</Button>
      </Container>    </div>
  );
}
